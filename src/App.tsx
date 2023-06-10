import {ChangeEvent} from 'react'
import './App.css'

import {atom, useAtom} from 'jotai'

// Create your atoms and derivatives
const textAtom = atom('')
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase())

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  return <input value={text} onChange={handleChange} />
}

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom)
  return <div>Uppercase: {uppercase}</div>
}

function App() {
  return (
    <>
      <Input />
      <Uppercase />
    </>
  )
}

export default App
