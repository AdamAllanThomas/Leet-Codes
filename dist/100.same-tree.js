"use strict";
`Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes
 have the same value.`;
function isSameTree(p, q) {
    // O(n)
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    else
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
function isSameTreeOneLine(p, q) {
    // O(n)
    return p === null && q === null
        ? true
        : p === null || q === null
            ? false
            : p.val !== q.val
                ? false
                : isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
