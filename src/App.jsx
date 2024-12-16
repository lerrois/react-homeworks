import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyButton from "./components/Button.jsx";
import MyApp from "./components/Button.jsx";
import AboutPage from "./components/About.jsx";
import Profile from "./components/User.jsx";
import LoginForm from "./components/Loginform.jsx";
import TodoList from "./components/ToDoList.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function App() {
  const [count, setCount] = useState(0)

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
      <MyApp />
        <AboutPage />
        <Profile />
        <TodoList />
        <LoginForm />
        <ShoppingList />
      <h1>Vite + React +++ </h1>
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
