import React, { useState, useTransition } from "react"

export default function SolutionTransitionHook() {
  const [isPending, startTransition] = useTransition()
  const [input2, setInput2] = useState("")
  const [list, setList2] = useState([])

  const onChangeEvent2 = (e) => {
    setInput2(e.target.value)
    startTransition(() => {
      const lst = []
      for (let i = 0; i < 5000; i++) {
        lst.push(e.target.value)
      }
      setList2(lst)
    })
  }

  return (
    <div>
      <h2>Solution Statement</h2>
      <input value={input2} onChange={onChangeEvent2} />
      <br />
      {isPending
        ? "Loading"
        : list.map((lst) => {
            return <pre>{lst}</pre>
          })}
    </div>
  )
}
