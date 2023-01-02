import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons'
import clsx from 'clsx'

export default function App() {
  const type = 'submit'
  const onClick = () => console.log('Github Clicked')
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button {...{ type, onClick }}>
          <IconBrandGithub />
          Register
        </Button>
        <Button type='submit' onClick={() => console.log('Register')}>
          <IconBrandFacebook />
          Register
        </Button>
        <Button className='bg-pink-600' onClick={() => console.log('Login')}>
          <IconBrandTwitter />
          Login
        </Button>
      </div>
    </div>
  )
}
function Button(props) {
  const { className = 'bg-blue-600', children, text, type = 'submit' } = props
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
      )}
    >
      {text || children}
    </button>
  )
}
