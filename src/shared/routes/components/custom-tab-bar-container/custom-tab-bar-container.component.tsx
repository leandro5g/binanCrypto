import { useCallback } from 'react'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { CustomTabItem } from '../custom-tab-item/custom-tab-item.component'

import { Container } from './custom-tab-bar-container.styles'

type CustomTabBarContainerProps = BottomTabBarProps

const CustomTabBarContainer: React.FC<CustomTabBarContainerProps> = ({
  descriptors,
  navigation,
  state,
}) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Container
      intensity={80}
      style={{
        height: RFValue(60) + bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel ?? options.title ?? route.name

        const isFocused = state.index === index

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }, [isFocused, route.key, route.name, navigation])

        return (
          <CustomTabItem
            key={route.key}
            isFocused={isFocused}
            label={label as string}
            onPress={onPress}
          />
        )
      })}
    </Container>
  )
}

export { CustomTabBarContainer }
