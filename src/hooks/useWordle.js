import { useState } from "react";

export const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [correct, setCorrect] = useState(false);

  const formatGuess = () => {
    console.log("here", currentGuess)
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
  
    if (key === 'Enter') {
      //Check if turn is greater than 5
      if (turn > 5) {
        console.log('You used all your guesses')
        return
      }

      //Check if word is 5 characters
      if (currentGuess.length !== 5) {
        console.log('Guess is invalid length')
        return
      }

      //Check if word already exist
      if (history.includes(currentGuess)) {
        console.log('Word already was guessed')
        return
      }
      formatGuess()
    }

  }


  return {
    turn, currentGuess, guesses, correct, handleKeyUp
  }

}
