function findMaxSum(arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    if (arr.length === 1) {
      return arr[0];
    }
    
    // Keep track of the maximum sum up to the current element
    let inclusive = arr[0];
    // Keep track of the maximum sum excluding the current element
    let exclusive = 0;
    
    for (let i = 1; i < arr.length; i++) {
      // Calculate the new inclusive sum by adding the current element and the previous exclusive sum
      const newInclusive = arr[i] + exclusive;
      // Update the exclusive sum to be the maximum of the previous inclusive and exclusive sums
      exclusive = Math.max(inclusive, exclusive);
      // Update the inclusive sum to the new inclusive sum
      inclusive = newInclusive;
    }
    
    // Return the maximum of the final inclusive and exclusive sums
    return Math.max(inclusive, exclusive);
  }
  
  // Example usage:
  const array = [2, 4, 6, 2, 5];
  const maxSum = findMaxSum(array);
  console.log(maxSum); // Output: 13
  