"use strict"

var BitArray = require("../bitarray.js")

require("tape")("minimal-bit-array", function(t) {
  for(var i=1; i<50; ++i) {
    var x = new BitArray(100)
    for(var j=0; j<100; j+=i) {
      x.set(j, true)
    }
    for(var j=0; j<100; ++j) {
      t.equals(x.get(j), j%i === 0, i +":"+j)
    }
    var y = new BitArray(100)
    y.import(x.export());
    for(var k=0; k<100; ++k) {
      t.equals(x.get(k), y.get(k))
    }
  }
  t.end()
})