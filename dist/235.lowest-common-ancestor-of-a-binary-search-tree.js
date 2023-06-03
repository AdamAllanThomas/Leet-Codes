"use strict";
function lowestCommonAncestor(root, p, q) {
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
