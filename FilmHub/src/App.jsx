import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5);

  const increment = () =>{
    setCount(count => count + 5);
  }
   const decrement = () =>{
    setCount(count - 5);
  }

return (
<>
<p>Counter Application</p>
<p>{count}</p>
<button onClick={increment}>Increment</button>
<p>{count}</p>
<button onClick={decrement}>Decrement</button>
</>
)
}

export default App
