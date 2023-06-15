function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is always the smaller array to optimize the algorithm
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
  
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
  
    let low = 0;
    let high = m;
  
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;
  
      const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
      const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
  
      const minX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
      const minY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
  
      if (maxX <= minY && maxY <= minX) {
        // We've found the correct partitions
        if (totalLength % 2 === 0) {
          // Even total length, take the average of the middle two elements
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else {
          // Odd total length, return the middle element
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        // We need to move towards the left side of nums1
        high = partitionX - 1;
      } else {
        // We need to move towards the right side of nums1
        low = partitionX + 1;
      }
    }
  
    // The input arrays are not sorted or valid, return null
    return null;
  }
  
  // Example usage
  const nums1 = [1, 3];
  const nums2 = [2];
  console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
  