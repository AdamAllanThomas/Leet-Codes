// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val: number): void {
    let newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
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
  let l1: ListNode | null = list1,
    l2: ListNode | null = list2;
  while (l1 !== null || l2 !== null) {
    if (l1 !== null && (l2 === null || l1.val <= l2.val)) {
      list.add(l1.val);
      l1 = l1.next;
    } else if (l2 !== null) {
      list.add(l2.val);
      l2 = l2.next;
    }
  }
  return list.head;
}
