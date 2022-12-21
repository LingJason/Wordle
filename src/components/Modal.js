import React from 'react'

export default function Modal({correct, turn, answer}) {
  return (
    <div className='modal'>
      {correct && (
        <div>
          <h1>You Win!</h1>
          <p className='answer'>{answer}</p>
          <p>You found the answer in {turn} guess!!</p>
        </div>
      )}
        {!correct && (
        <div>
          <h1>You Lost!</h1>
          <p className='answer'>{answer}</p>
          <p>Better Luck Next Time</p>
        </div>
      )}
    </div>
  )
}
