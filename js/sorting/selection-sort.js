function selectionSort(array) {
  let arrayCopy = Array.from(array);
  const Arraylength = arrayCopy.length
  
  
  for(let i = 0; i < Arraylength; i++) {
    let smallerItemIndex = i;

    for(let j = i + 1; j < Arraylength; j++) {
      if(arrayCopy[j] < arrayCopy[smallerItemIndex]) {
        smallerItemIndex = j
      }
    }

    if(arrayCopy[i] > arrayCopy[smallerItemIndex]) {
      const currentValueCopy = arrayCopy[i]
      arrayCopy[i] = arrayCopy[smallerItemIndex]
      arrayCopy[smallerItemIndex] = currentValueCopy; 
    }
  }

  return arrayCopy;
}


console.log(selectionSort([10, 2, 4, 9]));
