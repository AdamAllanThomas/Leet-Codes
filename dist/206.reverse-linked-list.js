"use strict";
`Given the head of a singly linked list, reverse the list, and return the reversed list.`;
function reverseList(head) {
    // O(n)
    let prev = null, current = head;
    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}
