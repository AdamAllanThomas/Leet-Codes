// Given the head of a singly linked list, reverse the list, and return the reversed list.
function reverseList(head: ListNode | null): ListNode | null {
  // O(n)
  let prev: ListNode | null = null,
    current: ListNode | null = head;
  while (current !== null) {
    const nextTemp: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}
