class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;

    if (!this.length) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }

    while (current?.next) {
      newTail = current;
      current = current?.next;
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;
    return current;
  }

  shift() {
    const currentHead = this.head;
    if (!this.length) {
      return undefined;
    }

    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);

console.log(list.shift());
console.log(list.shift());
// console.log(list.shift());

console.log(list);
