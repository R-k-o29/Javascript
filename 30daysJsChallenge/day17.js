// TASK1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK2
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  
  removeNode() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
  }

 
  displayNode() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}


const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.displayNode(); // Outputs: 1, 2, 3
console.log("Removed:", list.removeNode()); // Outputs: Removed: 3
list.displayNode(); // Outputs: 1, 2

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK3
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  displayStack() {
    console.log(this.items.join(" "));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.displayStack(); // Outputs: 1 2 3
console.log("Popped:", stack.pop()); // Outputs: Popped: 3
stack.displayStack(); // Outputs: 1 2
console.log("Top element:", stack.peek()); // Outputs: Top element: 2


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK4
