import { useEffect } from 'react'
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { TAB_BAR_MAP } from 'app/shared/config/constants/tab-bar-map'

import { TabFocused } from './modules/tab-focused/tab-focused.module'

import { useTheme } from 'styled-components/native'

import { Container, IconTab, ContentTabItem } from './custom-tab-item.styles'

type CustomTabItemProps = {
  key: string
  isFocused: boolean
  label: string
  onPress(): void
}

const MAP_ICON_NAME = {
  [TAB_BAR_MAP.HOME]: 'home',
  [TAB_BAR_MAP.MARKET]: 'areachart',
  [TAB_BAR_MAP.WALLET]: 'wallet',
  [TAB_BAR_MAP.ACCOUNT]: 'user',
}

const CustomTabItem: React.FC<CustomTabItemProps> = ({
  isFocused,
  label,
  onPress,
}) => {
  const { COLORS } = useTheme()

  const scale = useSharedValue(0.5)
  const rotate = useSharedValue(0) // Degrees

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(scale.value, [0.5, 1.4], [0.5, 1.4]) },
      { rotate: `${interpolate(rotate.value, [0, 360], [0, 360])}deg` },
    ],
  }))

  const nameIcon = MAP_ICON_NAME[label]

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(1.5)
      rotate.value = withTiming(360, {
        duration: 500,
      })
    } else {
      scale.value = withSpring(1)
      rotate.value = withTiming(0, {
        duration: 500,
      })
    }
  }, [isFocused])

  return (
    <Container activeOpacity={1} onPress={onPress}>
      {isFocused && <TabFocused />}
      <ContentTabItem style={animatedStyle}>
        <IconTab
          name={nameIcon}
          color={isFocused ? COLORS.BRAND[100] : COLORS.NEUTRAL[100]}
        />
      </ContentTabItem>
    </Container>
  )
}

export { CustomTabItem }
