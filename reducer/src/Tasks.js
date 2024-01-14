import { useState, useReducer } from "react"
const ACTIONTYPE = { TODO: "TODO", COMPLETED: "COMPLETED" }

function reducer(state, action) {
  switch (action.type) {
    case ACTIONTYPE.TODO:
      return [...state, newTaskTodo(action.newTask.name)]
    case ACTIONTYPE.COMPLETED:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function newTaskTodo(tsk) {
  return {
    id: Date.now(),
    taskName: tsk,
    isCompleted: true,
  }
}

function Tasks() {
  const [data, setData] = useState({ task: "dummy text" })
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
      <h2>Reducer Pattern - Tasks</h2>
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
        return (
          <div>
            <span>
              ID: <strong>{task.id}</strong>
            </span>
            &nbsp;
            <span>
              Task Name: <strong>{task.taskName}</strong>
            </span>
            &nbsp;
            <span>
              Completed: <strong>{task.isCompleted ? "Yes" : "No"}</strong>
            </span>
            &nbsp;
          </div>
        )
      })}
    </div>
  )
}

export default Tasks
