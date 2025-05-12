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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

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

  unshift(value) {
    const newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }

    let prev = null;
    let current = this.head;
    this.tail = current;

    let i = 0;

    while (current && i < 10) {
      // prev <- current <- next
      const next = current.next;
      current.next = prev;
      // Prev becomes current
      prev = current;
      // Next becomes current
      current = next;

      i++;
    }

    this.head = prev;

    return this;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unshift(0));
// console.log(list.unshift(1));
// console.log(list.unshift(2));
// console.log(list.push(10));

// console.log(list);
console.log(list.reverse());
// console.log(list);
