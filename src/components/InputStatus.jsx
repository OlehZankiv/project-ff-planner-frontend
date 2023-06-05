import React from 'react'

const InputStatus = ({ error, touched }) => {
  return (
    <>
      {error && touched && <div className='input-feedback'>{error}</div>}
      {error && touched && <div className='input-feedback'>X</div>}
      {!error && touched && <div className='input-feedback'>V</div>}
    </>
  )
}

export default InputStatus
