exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj, fn);
  },

  functionFunction : function(str) {
    var final = str;
    function string2(string) {
      final = str + "," + " " + string;
      return final;
    }
    return string2;
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
