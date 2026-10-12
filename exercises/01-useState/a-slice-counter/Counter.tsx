import { useState } from 'react'

export default function Counter() {
  const [count , setCount] = useState(0);

  const add = () => setCount(count + 1);
  const remove = () => setCount(count - 1);

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
    </div>
  )
}
