import { Box, Center, Hidden, Text, HStack, Link } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'

export default function TNCLayout({ children }) {
  return (
    <>
      {/* Top navigation */}
      <HStack
        position="fixed"
        top="0"
        w="full"
        zIndex={10}
        height={{ base: '69px', sm: '84px' }}
        backgroundColor="white"
        borderBottomWidth="1"
        borderBottomColor={theme.colors.shared.softGray}
      >
        {/* Logo SaleSpin */}
        <Center
          flex={{ base: '1', sm: 'unset' }}
          w={{ base: 'auto', sm: '86px', lg: '310px' }}
          paddingLeft="5"
        >
          <Center
            w="full"
            paddingY="2"
            borderRightWidth={{ base: '0', sm: '1' }}
            borderRightColor={theme.colors.shared.softer2Gray}
          >
            <Box flexDir="row" alignItems="center" w="full">
              {/* <Image
                w={{ base: '41px', sm: '50px' }}
                h={{ base: '41px', sm: '50px' }}
                source={require('shared/images/salespinLogo.png')}
              /> */}
              <Hidden till="lg" from="sm">
                <SolitoLink href="/">
                  <Link
                    _text={{
                      fontSize: 'md'
                    }}
                    fontWeight="semibold"
                  >
                    <Text
                      color={theme.colors.shared.softBlack}
                      fontSize={{ base: '19px', sm: '2xl' }}
                      fontWeight="semibold"
                      marginLeft={'2'}
                    >
                      SaleSpin
                    </Text>
                  </Link>
                </SolitoLink>
              </Hidden>
            </Box>
          </Center>
        </Center>
        <Hidden till="sm">
          <Box flex="1" flexDirection="row" alignItems="center" paddingLeft="6">
            <HStack>
              <Box paddingRight="5">
                <SolitoLink href={'#'}>
                  <Text fontSize="md" fontWeight="semibold">
                    Terms and Conditions
                  </Text>
                </SolitoLink>
              </Box>
              {/* <Box>
                <SolitoLink href={'#'}>
                  <Text fontSize="md" fontWeight="semibold">
                    Privacy Policy
                  </Text>
                </SolitoLink>
              </Box> */}
            </HStack>
          </Box>
        </Hidden>
        {/* <HStack
          marginLeft={{ base: '2', lg: '0' }}
          width={{ lg: '430px' }}
          justifyContent="end"
          paddingRight={{ base: '2', sm: '12' }}
        >
          <Center marginLeft={{ base: '0', sm: '6' }}>
            <Pressable
              w={{ base: 'auto', sm: '120px' }}
              paddingY="0.4rem"
              paddingX="0.6rem"
              borderWidth="2"
              borderRadius="lg"
              borderColor={theme.colors.shared.softGray}
              flexDirection="row"
              alignItems="center"
            >
              <Box w="18px">
                <IconGlobe />
              </Box>
              <Text
                flex="1"
                fontSize="13px"
                fontWeight="semibold"
                paddingLeft="2"
                paddingRight="2"
              >
                <Hidden from="sm">
                  <>EN</>
                </Hidden>
                <Hidden till="sm">
                  <>English</>
                </Hidden>
              </Text>
              <Box w="15px">
                <IconChevronDown rotation={180} />
              </Box>
            </Pressable>
          </Center>
          <Center marginLeft={{ base: '0', sm: '6' }}>
            <Hidden till="sm">
              <Pressable
                paddingX="7"
                paddingY="2"
                backgroundColor={theme.colors.shared.brightBlue}
                borderRadius="full"
                flexDirection="row"
                alignItems="center"
              >
                <Text fontSize="sm" fontWeight="semibold" color="white">
                  Sign in
                </Text>
              </Pressable>
            </Hidden>
            <Hidden from="sm">
              <Pressable marginLeft="2" p="2">
                <Box w="24px">
                  <IconMenu />
                </Box>
              </Pressable>
            </Hidden>
          </Center>
        </HStack> */}
      </HStack>

      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        marginTop={{
          base: '69px',
          sm: '84px'
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.colors.shared.white
          }}
          overScrollMode="auto"
        >
          {children}
        </KeyboardAwareScrollView>
      </Box>
    </>
  )
}
