import clsx from 'clsx'

export default function Button({
  className = 'bg-black',
  children,
  text,
  type = 'submit',
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-white px-4 h-10 rounded'
      )}>
      {text || children}
    </button>
  )
}
