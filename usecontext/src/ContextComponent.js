import React, { useContext } from "react"
import { ThemeContext } from "./App"

export default function ContextComponent() {
  const contextDarkTheme = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: contextDarkTheme ? "#333" : "#ccc",
    color: contextDarkTheme ? "#ccc" : "#333",
    padding: "2rem",
    marging: "2rem",
  }
  return (
    <div style={themeStyle}>
      <h3>Functional Component</h3>
    </div>
  )
}
