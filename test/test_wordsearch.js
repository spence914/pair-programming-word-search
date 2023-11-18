const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards and vertical", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['S', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['E', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['S', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally from top right", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'S'], // right most 'S' is at arr[0][7]
      ['L', 'R', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['E', 'F', 'F', 'F', 'Q', 'I', 'A', 'L'],
      ['F', 'M', 'J', 'N', 'N', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'F', 'F', 'E', 'R', 'L'],
      ['I', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'L', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally starting from the far right column", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'S'],
      ['L', 'R', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['E', 'F', 'F', 'F', 'Q', 'I', 'A', 'L'],
      ['F', 'M', 'J', 'N', 'N', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'F', 'F', 'E', 'R', 'L'],
      ['I', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'L', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'GREAAK');

    assert.isTrue(result);
  });
});