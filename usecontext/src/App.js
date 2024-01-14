import React, { useState } from "react"
import "./App.css"
import ContextComponent from "./ContextComponent"
import ContextComponent2 from "./ContextComponent2"
import ContextComponent3 from "./ContextComponent3"
import { ThemeProvider } from "./ThemeProvider"
import { HooksContext } from "./Lab3/HooksContext"

export const ThemeContext = React.createContext()
function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme((darkTheme) => !darkTheme)
  }
  return (
    <div>
      <h1>React Hooks - useContext</h1>

      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Enable/Disable Dark Theme</button>
        <ContextComponent />
      </ThemeContext.Provider>
      <hr />
      <h1>React Hooks - useContext - With useState</h1>
      <ThemeProvider>
        <ContextComponent2 />
      </ThemeProvider>
      <h1>React Hooks - useContext - With useReducer</h1>
      <HooksContext>
        <ContextComponent3 />
      </HooksContext>
    </div>
  )
}

export default App
