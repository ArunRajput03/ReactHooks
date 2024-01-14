import { useState, useReducer } from "react"
import TaskToDo from "./TaskToDo"
export const ACTIONTYPE = {
  TODO: "TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
}

function reducer(tasks, action) {
  switch (action.type) {
    case ACTIONTYPE.TODO:
      return [...tasks, newTaskTodo(action.newTask.name)]
    case ACTIONTYPE.TOGGLE_TODO:
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    case ACTIONTYPE.DELETE_TODO:
      return tasks.filter((task) => task.id !== action.id)
    default:
      return tasks
  }
}

function newTaskTodo(tsk) {
  return {
    id: Date.now(),
    taskName: tsk,
    isCompleted: false,
  }
}

function Tasks2() {
  const [data, setData] = useState({ task: "" })
  const [tasks, dispatch] = useReducer(reducer, [])
  // const [tasks, dispatch] => return value is going to be two portions
  //                            1) Task     => The first protion is going to be state in this case [] array object
  //                            2) dispatch => call to update our state, it's going to call this reducer function with certain parameters
  //
  //useReducer(reducer, []) => have 2 different parameters
  //reducer => pass the name of reducer which is a function, to perfrom on our state to get new state
  //      => takes 2 parameters
  //        1) state=> Takes currently State, where our application is currently at
  //        2) action => Going to take an action, this action we are going to pass with DISPATCH function
  // [] => Initial value in object {} / []

  //console.log(data)
  function handleFormSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONTYPE.TODO, newTask: { name: data.task } })
    setData((prv) => {
      return { ...prv, task: (prv.task = "") }
    })
    console.log(tasks)
  }

  return (
    <div>
      <h2>Reducer Pattern - Tasks With Child Compnent</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={data.task}
          onChange={(e) => {
            setData({ task: e.target.value })
          }}
        />
      </form>
      <hr />
      <span>{data.task}</span>
      {tasks.map((task) => {
        return <TaskToDo key={task.id} todo={task} dispatch={dispatch} />
      })}
    </div>
  )
}

export default Tasks2
