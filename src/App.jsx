import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { Picture } from "./components/Button.jsx";
import List from "./components/List.jsx";

function App() {
  const [count, setCount] = useState(0);
    const items = [
        {key:1, urla:'../images/smile1.jpg'},
        {key:2, urla:'../images/smile2.jpg'}
    ]
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <List items={ items } />
      {/*<Picture items={ items } />*/}
      <h1> </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
