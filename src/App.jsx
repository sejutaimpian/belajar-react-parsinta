import { IconBrandGithub } from '@tabler/icons'
import { useState } from 'react'
import Button from './Components/Button'
import Card from './Components/Card'
import Input from './Components/Input'
import Label from './Components/Label'
import PlaceContentCenter from './Components/PlaceContentCenter'

export default function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  })
  function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  function onSubmit(event) {
    event.preventDefault()

    console.log(form)
  }
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign up for new account</Card.Title>
        <form onSubmit={onSubmit}>
          <Card.Body>
            <div className='mb-5 border rounded-lg p-4'>
              <p>Name: {form.name || '----'}</p>
              <p>Email: {form.email || '----'}</p>
            </div>
            <div className='mb-6'>
              <Label htmlFor='name' value={'Name'} />
              <Input name='name' id='name' onChange={onChange} />
            </div>
            <div className='mb-6'>
              <Label htmlFor='email' value={'Email'} />
              <Input type='email' name='email' id='email' onChange={onChange} />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button>
              <IconBrandGithub />
              Register
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </PlaceContentCenter>
  )
}
