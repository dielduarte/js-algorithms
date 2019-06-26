function quickSort(array) {
  if(array.length <= 1) {
    return array
  }

  const arrayCopy = Array.from(array)
  const pivot = arrayCopy.pop()
  const lengthWithoutPivotItem = arrayCopy.length
  const greaterThanPivotItems = []
  const lessThanPivotItems = []

  for (let i = 0; i < lengthWithoutPivotItem; i++) {
    if (arrayCopy[i] <= pivot) {
      lessThanPivotItems.push(arrayCopy[i]);
    } else {
      greaterThanPivotItems.push(arrayCopy[i]);
    }
  }

  return [
    ...quickSort(lessThanPivotItems), 
    pivot,
    ...quickSort(greaterThanPivotItems)
  ]
}

console.log(quickSort([1, 10, 14, 3, 2, 18, 100, 4, 12, 19]))
