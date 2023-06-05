export const getInputClassName = (error, touched) => {
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
