import React, { useContext, useState, useReducer, createContext } from "react"

export const ThemeContext3 = createContext()

const initialReducerState = { darkTheme: true, message: [] }
export const Category = {
  DARK_THEME_STYLE: "DARK_THEME_STYLE",
}

const reducer = (state, action) => {
  switch (action.type) {
    case Category.DARK_THEME_STYLE:
      return {
        ...state,
        darkTheme: !state.darkTheme,
        message: [...state.message],
      }
    default:
      return state
  }
}

export function HooksContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialReducerState)

  return (
    <ThemeContext3.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext3.Provider>
  )
}
