import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const getYear = new Date().getFullYear()
  const {quiz, error, handleChange, handleSubmit } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Zenith Trivias</h2>
        <div className='form-control'>
          <label htmlFor='amount'>
            number of questions
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>
        {/* Category */}

        <div className='form-control'>
          <label htmlFor='category'>category</label>
          <select
            name='category'
            id='category'
            className='form-input'
            value={quiz.category}
            onChange={handleChange}
            >
              <option value='sports'>Sports</option>
              <option value='history'>History</option>
              <option value='politics'>Politics</option>
              <option value='vehicle'>Vehicle</option>
              <option value='animals'>Animals</option>
              <option value='mathematics'>Mathematics</option>
            </select>
        </div>

        {/* Question Type */}

        <div className='form-control'>
          <label htmlFor='questionType'>Select Type</label>
          <select
            name='questionType'
            id='questionType'
            className='form-input'
            value={quiz.questionType}
            onChange={handleChange}
            >
              <option value='multipleChoice'>Multiple Choice</option>
              <option value='boolean'>True / False</option>
            </select>
        </div>

        {/* Difficulty */}

        <div className='form-control'>
          <label htmlFor='difficulty'>select difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            className='form-input'
            value={quiz.difficulty}
            onChange={handleChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
        </div>

        {error && <p className='error'>
          can't generate questions, please try different options</p>
        }
        <button type='submit'
          onClick={handleSubmit}
          className='submit-btn'>start</button>
        </form>
        <span className='span'> &copy;Zenith Trivias {getYear} All Rights Reserved.</span>
      </section>
    </main>
  )
}

export default SetupForm
