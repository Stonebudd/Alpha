// Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as in order traversal.
//A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.
// inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

function* inorderTraversal(arr) {
    for (const element of arr) {
      if (Array.isArray(element)) {
        yield* inorderTraversal(element); // Recursively traverse inner array
      } else {
        yield element; // Yield integer
      }
    }
  }
  
  // Example usage
  const multiDimensionalArray = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
  const generator = inorderTraversal(multiDimensionalArray);
  
  for (const value of generator) {
    console.log(value);
  }
  