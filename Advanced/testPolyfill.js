// First it checks `.filter` is avaliable in browser

if (typeof Array.prototype.filter !== "function") {
  // Implementation goes here
  Array.prototype.filter = function (fn, thisp) {
    if (this === null) throw new TypeError();
    if (typeof fn !== "function") throw new TypeError();
    
    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (i in this) {
        var val = this[i];
        if (fn.call(thisp, val, i, this)) {
          result.push(val);
        }
      }
    }
    return result;
  };
}

// Use of .filter
console.log([1, 2, 3, 4, 5].filter(e => e > 3));