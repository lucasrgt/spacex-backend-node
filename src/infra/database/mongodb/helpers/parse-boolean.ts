export const parseBoolean = (value: string): boolean | undefined => {
  if (value.toLowerCase() === 'true') return true
  if (value.toLowerCase() === 'false') return false
  return undefined
}
