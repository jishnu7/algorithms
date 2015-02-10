
module.exports = function (array) {
  var i, j, temp,
    length = array.length;

  for (i = 0; i < length - 1; i++) {
    swap = i;
    for (j = i + 1; j < length - 1; j++) {
      if (array[j] < array[swap]) {
        swap = j;
      }
    }

    if (swap !== i) {
      temp = array[swap];
      array[swap] = array[i];
      array[i] = temp;
    }
  }

  return array;
};
