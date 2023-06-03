"use strict";
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
function mergeTwoLists(list1, list2) {
    // This is O(n), because adding is O(1)
    let list = new LinkedList();
    if (list1 === null && list2 === null) {
        return null;
    }
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let l1 = list1, l2 = list2;
    while (l1 !== null || l2 !== null) {
        if (l1 !== null && (l2 === null || l1.val <= l2.val)) {
            list.add(l1.val);
            l1 = l1.next;
        }
        else if (l2 !== null) {
            list.add(l2.val);
            l2 = l2.next;
        }
    }
    return list.head;
}
