import "./App.css"
import TransitionHook from "./Lab1/TransitionHook"
import SolutionTransitionHook from "./Lab1/SolutionTransitionHook"

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "left", marginLeft: "10%" }}>
        <h1>Learn - React 18 useTransition Hook</h1>
        <div className="AppHeader" style={{ color: "red" }}>
          <h3>
            <strong>
              Problem: If your site is slow and not responsive, then most user
              will immediate leave your site.
            </strong>
          </h3>
        </div>
        <div style={{ color: "darkgreen" }}>
          <strong>Solution: </strong>Unfortunality many react apps are slow but{" "}
          <strong>useTranistion</strong> hook is specially meant to speed up
          application and make them feel to responsive to users.
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <div
          style={{
            float: "left",
            width: "45%",
            color: "brown",
            border: "1px solid brown",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <br />
          By default all state priority is high
          <TransitionHook />
        </div>
        <div
          style={{
            float: "left",
            width: "45%",
            color: "blue",
            border: "1px solid blue",
            padding: "10px",
            textAlign: "left",
            marginLeft: "5px",
          }}
        >
          <br />
          useTranistion = startTransition - Set the low priority of state
          <SolutionTransitionHook />
        </div>
      </div>
    </div>
  )
}

export default App
