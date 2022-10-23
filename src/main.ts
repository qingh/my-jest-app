export function add(x: number, y: number): number {
  if (x > 50) {
    return x + y
  } else {
    return x + y + 50
  }
}

export function minus(x: number, y: number): number {
  if (x > y) {
    return x - y
  } else {
    return y - x
  }
}