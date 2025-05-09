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
    let value = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      value = value.next;

      // Penultimate position -> new tail
      if (i === this.length - 2) {
        this.tail = value;
        this.tail.next = null;
      }
    }
    this.length--;
    return this;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.head);
