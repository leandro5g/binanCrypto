import 'react-native-gesture-handler'

/* eslint-disable camelcase */
import { MyApp } from 'app/my-app'

import * as SplashScreen from 'expo-splash-screen'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (fontLoaded) {
    SplashScreen.hideAsync()
    return <MyApp />
  }
}
