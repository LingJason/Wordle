import React, { useEffect, useState } from 'react'

export default function Keypad() {
  const [letters, setLetters] = useState(null)

  useEffect(()=> {
    fetch('http://localhost:3001/letters')
      .then(result => result.json())
      .then(json => {
        setLetters(json)
      })
  }, [])
  return (
    <div className='keypad'>
      {letters && letters.map((letter) => {
        return (
          <div key={letter.key}>{letter.key}</div>
        )
      })}
    </div>
  )
}
