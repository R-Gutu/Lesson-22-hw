const obj = require("./counter");

describe('getIncrement', function () {
  test("SHOULD be 25 when initialValue = 20 and incrementalValue = 5", function() {
    expect(obj.getCounter(20,5).increment()).toEqual(25);
  });
});

describe('getDecrement', function () {
    test("SHOULD be 15 when initialValue = 20 and incrementalValue = 5", function() {
      expect(obj.getCounter(20,5).decrement()).toEqual(15);
    });
  });