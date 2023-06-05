import React from 'react'
import { AddIcon } from '../assets/icons/AddIcon'
const InputStatus = ({ error, touched }) => {
  return (
    <>
      {error && touched && (
        <div
          className='input-feedback'
          style={{
            color: '#cc6262',
            fontSize: '.65rem',
            marginTop: '-15px',
            marginLeft: '5px',
          }}
        >
          {error}
        </div>
      )}
      {error && touched && <AddIcon></AddIcon>}
      {!error && touched && <div className='input-feedback'>V</div>}
    </>
  )
}

export default InputStatus
