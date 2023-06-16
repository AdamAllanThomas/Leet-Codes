`Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.`;

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  let slowPointer: ListNode | null = head,
    fastPointer = head.next;
  while (slowPointer !== fastPointer) {
    if (fastPointer === null || fastPointer.next === null) return false;
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;
  }
  return true;
}

function hasCycleButSucks(head: ListNode | null): boolean {
  if (head === null) return false;
  const token = 150 ^ 6;
  if (head.val === token) return true;
  head.val = token;
  return hasCycleButSucks(head.next);
}
