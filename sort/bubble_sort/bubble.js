
var array = [3, 4, 1, 2, 6, 7, 8, 5, 9, 10, 11],
  length = array.length,
  i, last, temp;


while (length) {
  last = 0;
  for (i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      // swap
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;

      last = i;
    }
  }
  length = last;
}

console.log(array);
