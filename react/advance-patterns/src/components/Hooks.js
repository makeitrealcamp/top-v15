import { useState, useEffect } from 'react';

function useChange() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('component did mount')

    setTimeout(() => {
      setValue('hola mundo')
    }, 2000)

    return () => {
      console.log('component will unmount')
    }
  }, [value]);

  return { value, setValue }
}

export function Duplicate() {
  const { value, setValue } = useChange();

  return (
    <div>
      <textarea onChange={e => setValue(e.target.value)} value={value}></textarea>
      <div>{value}</div>
    </div>
  )
}
