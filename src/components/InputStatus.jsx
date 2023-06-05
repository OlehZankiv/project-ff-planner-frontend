import React from 'react'

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
      {error && touched && <div className='input-feedback'>X</div>}
      {!error && touched && <div className='input-feedback'>V</div>}
    </>
  )
}

export default InputStatus
