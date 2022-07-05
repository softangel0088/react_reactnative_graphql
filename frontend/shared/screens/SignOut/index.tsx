import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useRouter } from 'solito/router'
import { useRecoilState } from 'recoil'
import { jwtState } from '../../state'

export const SignOut = () => {
  const { push } = useRouter()
  const [jwt, setJWT] = useRecoilState<any>(jwtState)

  useEffect(() => {
    ;(async () => {
      await AsyncStorage.removeItem('jwt')
      // we should be clearing the apollo store here
      // we should also be clearing this on login as well
      // we should also be clearing the recoil state
      // https://www.apollographql.com/docs/react/networking/authentication/
      // client.clearStore()
      setJWT(undefined)
      push('/sign-in')
    })()
  }, [])

  return null
}
