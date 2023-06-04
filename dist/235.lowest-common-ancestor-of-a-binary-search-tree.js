"use strict";
`Given a binary search tree (BST), find the lowest common ancestor 
(LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has 
both p and q as descendants (where we allow a node to be a descendant of itself).”`;
function lowestCommonAncestor(root, p, q) {
    // O(h)
    if (root === null)
        return null;
    else if (p === null || q === null)
        return root;
    else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else
        return root;
}
