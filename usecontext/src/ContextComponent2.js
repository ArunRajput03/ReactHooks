import React, { useContext } from "react"
import {
  customHookForThemeContext,
  customHookForThemeUpdateContext,
} from "./ThemeProvider"

export default function ContextComponent2() {
  const contextDarkTheme = customHookForThemeContext() //useContext(ThemeContext)
  const contextUpdateDarkTheme = customHookForThemeUpdateContext() //useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: contextDarkTheme ? "#333" : "#ddd",
    color: contextDarkTheme ? "#ddd" : "#333",
    padding: "2rem",
    marging: "2rem",
  }
  return (
    <>
      <button onClick={contextUpdateDarkTheme}>
        Enable/Disable Dark Theme
      </button>
      <div style={themeStyle}>
        <h3>Functional Component</h3>
      </div>
    </>
  )
}
