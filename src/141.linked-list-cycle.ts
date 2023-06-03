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
