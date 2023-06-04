"use strict";
`Given a binary tree, determine if it is height-balanced.`;
function getHeight(root) {
    if (root == null)
        return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
function isBalanced(root) {
    // O(n^2)
    if (root === null)
        return true;
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1)
        return false;
    else
        return isBalanced(root.left) && isBalanced(root.right);
}
