function binarySearchRecursively(array, x, left, right) {
  if (right < left) return -1;

  const mid = Math.ceil(left + (right - left) / 2);

  if (array[mid] === x) return mid;

  if (array[mid] > x) return binarySearchRecursively(array, x, left, mid - 1);

  return binarySearchRecursively(array, x, mid + 1, right);
}

const array = [1, 4, 8, 12, 16];

// console.log(binarySearchRecursively(array, 16, 0, array.length - 1));

function binarySearch(array, x, left, right) {
  while (right > left) {
    const mid = Math.ceil(left + (right - left) / 2);
    if (array[mid] === x) return mid;

    if (array[mid] > x) {
      right--;
    } else {
      left++;
    }
  }

  return -1;
}

console.log(binarySearch(array, 1, 0, array.length - 1));
