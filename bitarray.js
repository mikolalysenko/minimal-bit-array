"use strict"

function BitArray(length) {
  this.length = length
  this.bits = new Uint32Array((length>>>5)+1)
}

BitArray.prototype.get = function(i) {
  i |= 0
  return !!(this.bits[i>>>5]&(1<<(i&31)))
}

BitArray.prototype.set = function(i, v) {
  i |= 0
  var idx = i>>>5
  var bit = 1<<(i&31)
  if(v) {
    this.bits[idx] |= bit
    return true
  } else {
    this.bits[idx] &= ~bit
    return false
  }
}

module.exports = BitArray