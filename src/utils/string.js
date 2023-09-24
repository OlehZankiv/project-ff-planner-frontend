export const capitalize = (string) =>
  string.length < 1 ? string.toUpperCase() : string[0]?.toUpperCase() + string.slice(1)
