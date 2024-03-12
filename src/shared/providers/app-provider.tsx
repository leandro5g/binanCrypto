import { ReactElement } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import { THEME_LIGHT } from '../design/themes/theme-light'
import { queryClient } from '../libs/react-query/query-client'

type AppProviderProps = {
  children: ReactElement
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME_LIGHT}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}

export { AppProvider }
