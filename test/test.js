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
    
    var json = x.toJSON()
    var z = BitArray.fromJSON(json)
    t.equals(z.length, 100)
    for(var j=0; j<100; ++j) {
      t.equals(z.get(j), x.get(j))
    }
  }
  
  t.end()
})