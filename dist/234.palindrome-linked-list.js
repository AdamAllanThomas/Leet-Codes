"use strict";
`Given the head of a singly linked list, return true if it is a palindrome or false otherwise.`;
function isPalindromeLinkedList(head) {
    // O(n)
    let backHalf = reverseList(middleNode(head));
    while (backHalf !== null && backHalf.val !== null && head !== null) {
        if (backHalf.val !== head.val)
            return false;
        backHalf = backHalf.next;
        head = head.next;
    }
    return true;
}
