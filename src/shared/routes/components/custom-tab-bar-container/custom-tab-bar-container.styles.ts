import { RFValue } from 'app/shared/libs/font-size/font-size'
import { BlurView } from 'expo-blur'
import styled from 'styled-components/native'

export const Container = styled(BlurView)`
  height: ${RFValue(80)}px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
`
