"use strict";
`Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.`;
function middleNode(head) {
    // O(n)
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
