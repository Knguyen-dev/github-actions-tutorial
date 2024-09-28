function sum(a, b) {
  return a + b;
}

// Here we've commented out these errors. And as a result, we would be able to pass the eslint check and be
// able to commit this file. However, once you uncomment them and try to commit, then
// you'll see that there are errors, and you can't commit until you've fixed them.

// Unused variable (should trigger no-unused-vars)
// const unusedVariable = 42;

// // Incorrect usage of == instead of === (should trigger eqeqeq)
// if (sum(1, "1") == 2) {
//   console.log("This is a loose equality check"); // Should be strict check
// }

// // Missing semicolon (should trigger semi)
// const result = sum(2, 3);

// // Logging without a proper message (depending on no-console rule)
// console.log(result);

module.exports = {
  sum,
};
