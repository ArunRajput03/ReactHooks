import React, { useContext, useState } from "react"

const ThemeContext2 = React.createContext()
const ThemeUpdateContext2 = React.createContext()

export function customHookForThemeContext() {
  return useContext(ThemeContext2)
}

export function customHookForThemeUpdateContext() {
  return useContext(ThemeUpdateContext2)
}

export function ThemeProvider({ children }) {
  const [darkTheme2, setDarkTheme2] = useState(true)

  function toggleThemeProviderState() {
    setDarkTheme2((darkTheme) => !darkTheme)
  }

  return (
    <ThemeContext2.Provider value={darkTheme2}>
      <ThemeUpdateContext2.Provider value={toggleThemeProviderState}>
        {children}
      </ThemeUpdateContext2.Provider>
    </ThemeContext2.Provider>
  )
}
