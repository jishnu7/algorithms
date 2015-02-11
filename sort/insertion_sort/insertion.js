module.exports = function (array) {
  var i,
    length = array.length;
  
  for (i = 1; i < length; i++) {
    j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      j--;
    }
  }

  return array;
};

