minimal-bit-array
=================
A minimalistic bit array implementation that is compatible with ndarray's internals.

[![testling badge](https://ci.testling.com/mikolalysenko/minimal-bit-array.png)](https://ci.testling.com/mikolalysenko/minimal-bit-array)

[![build status](https://secure.travis-ci.org/mikolalysenko/minimal-bit-array.png)](http://travis-ci.org/mikolalysenko/minimal-bit-array)

## Example
```javascript
var BitArray = require("minimal-bit-array")
var x = new BitArray(100)

x.set(5, true)

console.log(x.get(4))     //Prints false
console.log(x.get(5))     //Prints true
```

## Install

    npm install minimal-bit-array
    
## API

```javascript
var BitArray = require("minimal-bit-array")
```

### `BitArray(length)`
Creates a bit array with the given length

### `array.get(i)`
Retrieves the bit at location i

### `array.set(i, v)`
Sets the bit at location i to v

### `array.toJSON()`
Serializes the array to a JSON object

### `BitArray.fromJSON(x)`
Deserializes a JSON object into a bit array.

## Credits
(c) 2013 Mikola Lysenko. MIT License
