import React, { useEffect, useState } from 'react'
import { useWordle } from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({answer}) {
  const { currentGuess, guesses, turn, correct, usedKeys, handleKeyUp } = useWordle(answer)
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    if (correct) {
      setTimeout(() => setModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    if (turn > 5) {
      setTimeout(() => setModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    return() => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, correct])


  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
      {modal && <Modal correct={correct} turn={turn} answer={answer}/>}
    </div>
  )
}
