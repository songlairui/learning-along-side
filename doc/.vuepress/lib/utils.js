export const charkXY = (idx, cols = 4) => {
  const x = idx % cols
  const y = Math.floor(idx / cols)
  return { x, y }
}
