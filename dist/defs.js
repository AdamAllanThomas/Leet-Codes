"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(val) {
        let newNode = new ListNode(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail !== null) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }
}
