import React from 'react'

export const InputStatus = ({ error, touched }) => {
  return (
    <>
      {error && touched && <div className='input-feedback'>{error}</div>}
      {error && touched && <div className='input-feedback'>X</div>}
      {!error && touched && <div className='input-feedback'>V</div>}
    </>
  )
}

export const GetInputClassName = (error, touched) => {
  if (!error && !touched) {
    return ''
  }

  if (!error && touched) {
    return 'success'
  }

  if (error && touched) {
    return 'error'
  }
}
