const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  })

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);          
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('Capitalize', () => {
    function cap(string) {
      const first = string.charAt(0).toUpperCase();
      const last = string.slice(1);
      let test = first + last;

      return test;
    }

    expect(cap("test")).toBe("Test");
  });

  test("Reverse", () => {
    function reverse(string) {
      const split = string.split("").reverse().join("");

      return split;
    }

    expect(reverse("test")).toBe("tset");
  });

  test("Calculator Add", () => {
    function add(num1, num2) {
      return num1 + num2;
    }

    expect(add(5,7)).toBe(12);
  });

  test("Calculator Sub", () => {
    function subtract(num1, num2) {
      return num1 - num2;
    }

    expect(subtract(5,4)).toBe(1);
  });

  test("Caesar Cipher", () => {
    function caesar(string, shiftFactor) {
      const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      const split = string.split("");
      let result = [];

      for(let i = 0; i < split.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
          if(split[i] === alphabet[j]) {
            result.push(alphabet[j + shiftFactor]);
          }
        }
      }
      
      return result.join("");
    }

    expect(caesar("hello", 3)).toBe("khoor");
  });

test("Analyze Array", () => {
  function analyze(array) {
    let avg = 0;

    array.forEach(arr => avg += (arr / array.length))
    
    const obj = {
      average: Number(avg.toFixed(2)),
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length
    }

    return avg;
  }

  expect(analyze([1,8,3,4,2,6])).toBe(4);
})