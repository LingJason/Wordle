import React, { useEffect } from 'react'
import { useWordle } from '../hooks/useWordle'

export default function Wordle({answer}) {
  const { currentGuess, guesses, turn, correct, handleKeyUp } = useWordle(answer)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return() => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  useEffect(() => {
    console.log(guesses, turn, correct)
  }, [guesses, turn, correct])

  return (
    <div>Current Guess - {currentGuess} </div>
  )
}
