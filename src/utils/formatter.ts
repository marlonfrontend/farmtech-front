export const isInfinite = (value: number) => {
  return isNaN(value) || !isFinite(value) ? '-' : value + '%'
}
