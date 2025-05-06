class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.#head) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }

    this.#tail = node;
    this.length++;
    return this;
  }

  pop() {
    let value = this.#head;
    for (let i = 1; i < this.length - 1; i++) {
      value = value.next;

      // Penultimate position -> new tail
      if (i === this.length - 2) {
        this.#tail = value;
        this.#tail.next = null;
      }
    }
    this.length--;
    return this;
  }

  get next() {
    return this.#head.next;
  }

  get tail() {
    return this.#tail;
  }
}

const a = new SinglyLinkedList();

a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.pop();
a.pop();
console.log(a.next.next);
