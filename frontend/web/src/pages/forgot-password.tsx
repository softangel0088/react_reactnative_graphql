import { NextSeo } from 'next-seo'
import ForgotPassword from 'shared/screens/ForgotPassword'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Forgot Password"
        description="Reset your password"
        noindex={false}
      />
      <ForgotPassword />
    </>
  )
}
