import React, { useState } from "react"

export default function TransitionHook() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const onChangeEvent = (e) => {
    setInput(e.target.value)
    const lst = []
    for (let i = 0; i < 5000; i++) {
      lst.push(e.target.value)
    }
    setList(lst)
  }

  return (
    <div>
      <h2>Problem Statement</h2>
      <input value={input} onChange={onChangeEvent} />
      <br />
      {list.map((lst) => {
        return <pre>{lst}</pre>
      })}
    </div>
  )
}
