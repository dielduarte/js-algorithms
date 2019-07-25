function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    for(let j = 0; j < i; j++) {
      if(array[i] < array[j]) {
        const spliced = array.splice(i, 1)
        array.splice(j, 0, spliced[0])
      }
    }
  }

  return array;
}

console.log(insertionSort([10, 4, 2]));
