const expect = require('chai').expect;
let solution = require('../7').solution;

describe('greater than 4 only', () => {
  it('should return a new array', () => {
    const result = solution([1, 2, 3]);
    expect(result).to.deep.equal([1, 2 , 3]);
  });
  it('should return a new array', () => {
    const result = solution([4, 3, 8, 4, 10]);
    expect(result).to.deep.equal([3, 4, 4, 8, 10]);
  });
  it('should return a new array', () => {
    const result = solution([-1, 0, -5, 3, 2, 4]);
    expect(result).to.deep.equal([-5, -1, 0, 2, 3, 4]);
  });
});