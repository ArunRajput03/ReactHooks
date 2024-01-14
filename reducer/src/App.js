import { useState, useReducer } from "react"
const ACTIONS = { INCREASE: "ADD", DECREASE: "SUBTRACT" }
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return { count: state.count + 1 }
    case ACTIONS.DECREASE:
      return { count: state.count - 1 }
    default:
      return state
  }
}
function App() {
  const [data, setCount] = useState({ count: 0, name: "" })
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  function incrementReducer() {
    //console.log(state)
    dispatch({ type: ACTIONS.INCREASE })
  }
  function decrementReducer() {
    dispatch({ type: ACTIONS.DECREASE })
  }
  function increment() {
    setCount((prvState) => {
      //console.log(prvState)
      return {
        ...prvState,
        count: prvState.count + 1,
        name: "Name" + prvState.count,
      }
    })
  }
  function decrement() {
    setCount((prvState) => {
      console.log(prvState)
      return { ...prvState, count: prvState.count - 1 }
    })
  }
  return (
    <div>
      <h2>UseState</h2>
      <button onClick={increment}>+</button>
      <span>{data.count}</span>
      <button onClick={decrement}>-</button>
      <hr />
      <h2>Learn Reducer Pattern</h2>
      <button onClick={incrementReducer}>+</button>
      <span>{state.count}</span>
      <button onClick={decrementReducer}>-</button>
    </div>
  )
}

export default App
