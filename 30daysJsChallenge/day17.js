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

const reverseString = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversed = "";
  while (stack.items.length > 0) {
    reversed += stack.pop();
  }
  return reversed;
};


const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original:", originalString); // Outputs: Original: hello
console.log("Reversed:", reversedString); // Outputs: Reversed: olleh

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK5
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  displayQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.displayQueue(); // Outputs: [1,2,3]
console.log("Dequeued:", queue.dequeue()); // Outputs: Dequeued: 1
queue.displayQueue(); // Outputs: [2,3]
console.log("Front element:", queue.front()); // Outputs: Front element: 2

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//TASK6
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  displayQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue("Print job 1");
queue.enqueue("Print job 2");
queue.enqueue("Print job 3");
queue.displayQueue(); // Outputs: ['Print job 1', 'Print job 2', 'Print job 3']
console.log("Dequeued:", queue.dequeue()); // Outputs: Dequeued: Print job 1
queue.displayQueue(); // Outputs: ['Print job 2', 'Print job 3']
console.log("Front element:", queue.front()); // Outputs: Front element: Print job 2



