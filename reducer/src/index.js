import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Tasks from "./Tasks"
import Tasks2 from "./Tasks2"
import TasksFromLocalStorage from "./TasksFromLocalStorage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <App></App>
    <Tasks></Tasks>
    <Tasks2></Tasks2>
    <TasksFromLocalStorage />
  </>
)
