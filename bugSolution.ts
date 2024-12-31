function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

let result1 = addSafe(1, 2); // Works correctly
let result2 = addSafe(1, "2"); // Throws an error

//Another solution with stricter type checking
function addStrict(a: number, b:number): number {
  return a + b;
}
let result3 = addStrict(1, 2); //Works correctly
//let result4 = addStrict(1, "2"); //Compiler error