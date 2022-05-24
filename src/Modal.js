import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    correct,
    questions
  } = useGlobalContext()

  const score = ((correct/questions.length)* 100).toFixed(0)


  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>{ score > 50 ? `Congrats!` : `Oops!`}</h2>
        <p>You answered {score}% of questions correctly</p>
        <button
          className='close-btn'
          onClick={closeModal}
        >play again</button>
      </div>

    </div>
  )
}

export default Modal
