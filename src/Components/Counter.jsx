import { useState } from 'react'
import Button from './Button'

export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue)
  function handleClick() {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>{count}</h1>
      <div className='mt-5 flex items-center justify-center gap-2'>
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick()
            handleClick()
            handleClick()
          }}>
          +3
        </Button>
      </div>
    </div>
  )
}
