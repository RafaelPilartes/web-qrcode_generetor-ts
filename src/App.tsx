import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { QrCodeContextProvider } from './context/QrCodeContext'
import { AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <AppProvider>
      <QrCodeContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QrCodeContextProvider>
    </AppProvider>
  )
}

export default App
