import React, { useEffect } from 'react'
import { useWordle } from '../hooks/useWordle'

export default function Wordle({answer}) {
  const { currentGuess, handleKeyUp } = useWordle(answer)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return() => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <div>Current Guess - {currentGuess} </div>
  )
}
