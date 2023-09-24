export const average = (data) =>
  data.reduce((totalValue, currentValue) => totalValue + currentValue, 0) / data.length

export const normalize = (data) => {
  const max = Math.max(...data)
  return data.map((item) => item / max || 0.0000000001)
}
