import React, { useContext } from "react"
import { Category, ThemeContext3 } from "./Lab3/HooksContext"

export default function ContextComponent3() {
  const { state, dispatch } = useContext(ThemeContext3)

  const themeStyle = {
    backgroundColor: state.darkTheme ? "#333" : "#ddd",
    color: state.darkTheme ? "#ddd" : "#333",
    padding: "2rem",
    marging: "2rem",
  }

  const onClickFunction = () => {
    dispatch({ type: Category.DARK_THEME_STYLE })
  }
  return (
    <>
      <button onClick={onClickFunction}>Enable/Disable Dark Theme</button>
      <div style={themeStyle}>
        <h3>Functional Component</h3>
      </div>
    </>
  )
}
