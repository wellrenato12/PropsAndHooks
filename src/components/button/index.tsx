import { useState } from "react"

export function Button() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((state) => state + 1)
  }

  function decrement() {
    if(count > 0) {
      setCount((state) => state - 1)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '24px'}}>{count}</span>
      <button style={{ width: '150px' }} onClick={increment}>Increment</button>
      <button style={{ width: '150px' }} onClick={decrement}>Decrement</button>
    </div>
  )
}