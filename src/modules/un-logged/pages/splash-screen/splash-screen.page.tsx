import { FadeIn, SlideInUp } from 'react-native-reanimated'

import AppIconSvg from 'app/modules/un-logged/assets/svgs/app-icon.svg'

import { Container, Content, TitleOnboarding } from './splash-screen.styles'

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Content entering={SlideInUp.delay(200).duration(400)}>
        <AppIconSvg />
      </Content>

      <Content>
        <TitleOnboarding>
          BinanCrypto Sua plataforma de Cryptomoedas
        </TitleOnboarding>
      </Content>
    </Container>
  )
}

export { SplashScreen }
