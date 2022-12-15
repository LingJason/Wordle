import { useState } from "react";

export const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [correct, setCorrect] = useState(false);

  const formatGuess = () => {

  }

  const addNewGuess = () => {


  }

  const handleKeyUp = ( {key}) => {

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }


    // Test to see if its a letter
    if (/^[A-Za-z]$/.test(key)) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {
    turn, currentGuess, guesses, correct, handleKeyUp
  }

}
