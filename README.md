# MongoDB $inc Operator with String Value

This example demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string value instead of a number.  The `$inc` operator is used to increment a numerical field by a specified value. If you supply a string, the operation fails silently or produces unexpected results.

## Bug

The original code attempts to increment the `age` field by 1, but uses a string '1' instead of the number 1. This will either fail to increment the value or may produce erratic outcomes depending on MongoDB's server version. 

## Solution

The correct usage involves providing a numerical value to `$inc`. The solution replaces the string '1' with the number 1. This ensures that the `age` field is incremented correctly.

## How to reproduce

1.  Create a MongoDB collection named `myCollection`.
2.  Insert a document with the name "John" and an age.
3.  Run the code in `bug.js`.  Observe the result.
4.  Run the code in `bugSolution.js`. Observe the result.

The difference in output clearly shows the correct usage of the `$inc` operator.