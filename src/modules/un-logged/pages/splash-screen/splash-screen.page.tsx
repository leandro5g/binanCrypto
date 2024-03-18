import { useEffect } from 'react'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { StackActions, useNavigation } from '@react-navigation/native'

import {
  FadeInLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import AppIconSvg from 'app/modules/un-logged/assets/svgs/app-icon.svg'

import { Container, Content, TitleOnboarding } from './splash-screen.styles'

const SplashScreen: React.FC = () => {
  const { dispatch } = useNavigation()

  const offsetYIcon = useSharedValue(30)

  const styledAnimated = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetYIcon.value }],
  }))

  useEffect(() => {
    offsetYIcon.value = withSpring(RFValue(-20), {
      duration: 600,
    })
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(StackActions.replace('Onboarding'))
    }, 2000)

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Container>
      <Content style={styledAnimated}>
        <AppIconSvg width={RFValue(120)} height={RFValue(120)} />
      </Content>

      <Content entering={FadeInLeft.delay(400).duration(400)}>
        <TitleOnboarding variant="H1">
          BinanCrypto Sua{'\n'}plataforma de Cryptomoedas
        </TitleOnboarding>
      </Content>
    </Container>
  )
}

export { SplashScreen }
