export function removeNull(obj: Object): Object {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value != null)
      .map(([key, value]) => [key, value === Object(value) ? removeNull(value) : value])
  )
}
