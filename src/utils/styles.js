export const getOpacityColor = (colorAsHex, opacity) => {
  if (colorAsHex.startsWith('#')) colorAsHex = colorAsHex.substring(1)

  const red = parseInt(colorAsHex.substring(0, 2), 16)
  const green = parseInt(colorAsHex.substring(2, 4), 16)
  const blue = parseInt(colorAsHex.substring(4, 6), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}
