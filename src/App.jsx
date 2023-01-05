import Counter from './Components/Counter'
import PlaceContentCenter from './Components/PlaceContentCenter'

export default function App() {
  return (
    <PlaceContentCenter>
      <Counter initialValue={10} />
    </PlaceContentCenter>
  )
}
