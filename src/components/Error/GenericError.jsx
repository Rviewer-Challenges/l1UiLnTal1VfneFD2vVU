import React from 'react'
import '../styles/errorStyles.css'

import errorImage from '../../assets/warning-sign.svg'
const GenericError = ({ setErrorWindow, err }) => {

  const { message, code } = err.getError()[0]

  let errMessage = Object.values(message);
  let codeMessage = code


  return (
    <>
      <div className='error_layout'>

        <div className='error_container'>

          <p className='error_code'> { errMessage }</p>

          <img className='error_image' src={errorImage} />

          <p className='error_message'> { codeMessage } </p>

          <button
            className='error_button'
            onClick={setErrorWindow}
          > come back </button>

        </div>

      </div>
    </>
  )
}

export default GenericError