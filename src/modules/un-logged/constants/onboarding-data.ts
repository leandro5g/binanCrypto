import { SvgProps } from 'react-native-svg'

import Onboarding1Svg from 'app/modules/un-logged/assets/onboarding/onboarding1.svg'
import Onboarding2Svg from 'app/modules/un-logged/assets/onboarding/onboarding2.svg'
import Onboarding3Svg from 'app/modules/un-logged/assets/onboarding/onboarding3.svg'

export type TypeItemOnboarding = {
  icon: React.FC<SvgProps>
  title: string
  subTitle: string
}

export const ONBOARDING_DATA = [
  {
    id: '1-index',
    icon: Onboarding1Svg,
    title: `Bem vindo ao\nBinanCrypto`,
    subTitle:
      'seu guia essencial no mundo das criptomoedas. Acompanhe as tendências e mantenha-se atualizado com facilidade.',
  },
  {
    id: '2-index',
    icon: Onboarding2Svg,
    title: `Acesse e Explore\nNovas Criptomoedas`,
    subTitle:
      'Monitore valores de múltiplas criptomoedas em tempo real, tudo em um único local.',
  },
  {
    id: '3-index',
    icon: Onboarding3Svg,
    title: `Acompanhe o Crescimento\ndas Criptomoedas`,
    subTitle:
      'Monitore o Crescimento e Atualizações dos Valores de Mercado das Criptomoedas em Tempo Real',
  },
]
