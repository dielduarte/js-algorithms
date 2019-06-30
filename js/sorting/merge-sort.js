function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }

  const arrayCopy = Array.from(array)

  //first, we break the array into two halfs
  const middleIndex = Math.floor(arrayCopy.length / 2)
  const leftHalf = arrayCopy.slice(0, middleIndex)
  const rightHalf = arrayCopy.slice(middleIndex)
  
  
  return merge(
    mergeSort(leftHalf),
    mergeSort(rightHalf)
  )
}

function merge(leftHalf, rightHalf) {
  let result = []
  let indexLeft = 0
  let indexRight = 0
  
  while (indexLeft < leftHalf.length && indexRight < rightHalf.length) {
    if (leftHalf[indexLeft] < rightHalf[indexRight]) {
      result.push(leftHalf[indexLeft])
      indexLeft++
    } else {
      result.push(rightHalf[indexRight])
      indexRight++
    }
  }
  
  return result
    .concat(leftHalf.slice(indexLeft))
    .concat(rightHalf.slice(indexRight))

}

console.log(mergeSort([1, 10, 9, 3, 4]))
