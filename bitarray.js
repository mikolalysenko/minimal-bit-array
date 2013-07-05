"use strict"

function BitArray(length) {
  this.length = 0;
  if (length <= 0) return;
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

/**
 * export - save as a UTF8 string
 * @return {Obj} An object with two members: uint32s: having the uint32
 * representation and length: containing the number of bits
 */
BitArray.prototype.export = function() {
  var bits = []
  var num = (this.length>>>5)+1
  for (var i=0; i<num; ++i)
    bits[i] = this.bits[i]
  return { bits: bits, length: this.length }
};

/**
 * import - restore from object containing a UTF8 string and a bit lnegth
 * @param {Object} obj An object with an array representation of the uint32s
 * array and a bit length.
 */
BitArray.prototype.import = function(obj) {
  this.length = obj.length
  var num = (this.length>>>5)+1
  this.bits = new Uint32Array(num)
  var strIdx = 0
  for (var i=0; i<num; ++i)
    this.bits[i] = obj.bits[i]
};

module.exports = BitArray