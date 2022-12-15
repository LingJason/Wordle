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

  const handleKeyup = () => {


  }

  return {
    turn, currentGuess, guesses, correct, handleKeyup
  }

}
