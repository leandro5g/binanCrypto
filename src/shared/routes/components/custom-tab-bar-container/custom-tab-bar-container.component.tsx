import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Container } from './custom-tab-bar-container.styles'
import { useCallback } from 'react'
import { CustomTabItem } from '../custom-tab-item/custom-tab-item.component'

type CustomTabBarContainerProps = BottomTabBarProps

const CustomTabBarContainer: React.FC<CustomTabBarContainerProps> = ({
  descriptors,
  navigation,
  state,
}) => {
  return (
    <Container intensity={40}>
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
