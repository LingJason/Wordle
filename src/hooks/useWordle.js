import { useState } from "react";

export const useWordle = (answer) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [correct, setCorrect] = useState(false);

  const formatGuess = () => {
    let answerArr = [...answer];
    // Word to letters and set to grey
    let formattedGuess = [...currentGuess].map((letter) => {
      return {
        key: letter, 
        color: 'grey'
      }
    })

    
    // Set letter to green if correct index spot
    formattedGuess.forEach((letter, i) => {
      if (answerArr[i] === letter.key) {
        formattedGuess[i].color = 'green';
        answerArr[i] = null;
      }
    });
    
    //Set letter to yellow if correct but wrong index spot
    formattedGuess.forEach((letter, i) => {
      if (answerArr.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        answerArr[answerArr.indexOf(letter.key)] = null;
      }
    })

    return formattedGuess
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
      const formatted = formatGuess()
      console.log(formatted)
    }

  }


  return {
    turn, currentGuess, guesses, correct, handleKeyUp
  }

}
