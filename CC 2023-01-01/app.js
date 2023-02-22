function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function maxLevelSum(root) {
    if (!root) {
      return 0;
    }
  
    let level = 1;
    let maxLevel = 1;
    let maxSum = root.val;
  
    const queue = [root];
  
    while (queue.length) {
      const size = queue.length;
      let levelSum = 0;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        levelSum += node.val;
  
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
  
      if (levelSum > maxSum) {
        maxSum = levelSum;
        maxLevel = level;
      }
  
      level++;
    }
  
    return maxLevel;
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(7);
  root.right = new TreeNode(0);
  root.left.left = new TreeNode(7);
  root.left.right = new TreeNode(-8);
  
  console.log(maxLevelSum(root)); // Output: 2
  