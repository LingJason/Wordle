import React, { useEffect } from 'react'
import { useWordle } from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({answer}) {
  const { currentGuess, guesses, turn, correct, usedKeys, handleKeyUp } = useWordle(answer)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    if (correct) {
      window.removeEventListener('keyup', handleKeyUp)
    }

    return() => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, correct])


  return (
    <div>
      <div>Current Guess - {currentGuess} </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}
