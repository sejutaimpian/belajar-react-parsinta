export default function Label({ value, children, ...props }) {
  return (
    <label className='text-slate-600 mb-1 block' {...props}>
      {value || children}
    </label>
  )
}
