import React, { useEffect } from 'react'
import { useWordle } from '../hooks/useWordle'
import Grid from './Grid'

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
    <div>
      <div>Current Guess - {currentGuess} </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    </div>
  )
}
