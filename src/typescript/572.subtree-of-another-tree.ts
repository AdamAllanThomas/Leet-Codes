`Given the roots of two binary trees root and subRoot, return true if there is a subtree of
root with the same structure and node values of subRoot and false otherwise. A subtree of a 
binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 The tree tree could also be considered as a subtree of itself.`;

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // O(m * n)
  if (subRoot === null) return true;
  if (root === null) return false;
  if (isIdentical(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isIdentical(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  return (
    root1.val === root2.val &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}
