import React from "react"
import GlobalStyle from "assets/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/theme"

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <h1>Layout</h1>
          {children}
        </div>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
