console.clear();

let obj = {};

obj[1] = "one";
obj[true] = "true1";
console.log(obj);

obj["1"] = "string";
console.log(obj);
console.log(obj["true"]);

// All keys are stringified in an object
