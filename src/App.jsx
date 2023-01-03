import Card from './Components/Card'
import Button from './Components/Button'

export default function App() {
  return (
    <div className='bg-slate-100 text-slate-800 tracking-tighter antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-4xl w-full flex items-center flex-col md:flex-row gap-4'>
        <Card>
          <Card.Title>Hello React</Card.Title>
          <Card.Body>
            Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat, dicta. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aut, aperiam?
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Hello React</Card.Title>
          <Card.Body>
            Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat, dicta. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aut, aperiam?
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}
