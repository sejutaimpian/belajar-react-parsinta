import { useState } from 'react'
import Button from './Components/Button'
import PlaceContentCenter from './Components/PlaceContentCenter'

export default function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <PlaceContentCenter>
      <div>{count}</div>
      <Button onClick={handleClick}>+1</Button>
      <Button
        onClick={() => {
          handleClick()
          handleClick()
          handleClick()
        }}>
        +3
      </Button>
    </PlaceContentCenter>
  )
}
