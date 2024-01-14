import React from "react"
import { ACTIONTYPE } from "./Tasks2"
import { APP } from "./util/common"

export default function TaskToDo({ todo, dispatch }) {
  function taskDelete() {
    dispatch({ type: APP.ACTIONTYPE.DELETE_TODO, id: todo.id })
  }
  return (
    <div style={{ color: todo.isCompleted ? "#000" : "#AAA", margin: "10px" }}>
      <span>
        ID: <strong>{todo.id}</strong>
      </span>
      <span style={{ margin: "10px" }}>
        Task Name: <strong>{todo.taskName}</strong>
      </span>
      <span style={{ margin: "10px" }}>
        Completed: <strong>{todo.isCompleted ? "Yes" : "No"}</strong>
      </span>
      <button
        onClick={() =>
          dispatch({ type: APP.ACTIONTYPE.TOGGLE_TODO, id: todo.id })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: APP.ACTIONTYPE.DELETE_TODO, id: todo.id })
        }
      >
        Delete
      </button>
    </div>
  )
}
