exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var n = arr.indexOf(item);
    return n;
  },

  sum : function(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
      x += arr[i];
    }
    return x;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i,1)
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    arr.shift();
    return arr;

  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;

  },

  insert : function(arr, item, index) {
    arr += arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var y = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        y += 1;
      }
    }
    return y;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        var y = i;
      }
    }
    return y;
  }
};
