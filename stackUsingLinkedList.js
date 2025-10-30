// Node class to store data and next pointer
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class using Linked List
class Stack {
  constructor() {
    this.top = null;  // points to the top node
    this.size = 0;    // number of elements
  }

  // Push element onto the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;  // point new node to the current top
    this.top = newNode;       // make new node the top
    this.size++;
    console.log(`${value} pushed to stack`);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty, nothing to pop");
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next; // move top pointer down
    this.size--;
    console.log(`${poppedValue} popped from stack`);
    return poppedValue;
  }

  // Peek at the top element
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    console.log(`Top element: ${this.top.value}`);
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Get stack size
  getSize() {
    console.log(`Stack size: ${this.size}`);
    return this.size;
  }

  // Print all stack elements
  printStack() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let current = this.top;
    let stackValues = [];
    while (current) {
      stackValues.push(current.value);
      current = current.next;
    }
    console.log("Stack elements (top → bottom):", stackValues.join(" -> "));
  }
}

// ----------------------------
// Example Usage
// ----------------------------
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();  // Output: 30 -> 20 -> 10

stack.peek();        // Output: Top element: 30
stack.pop();         // Output: 30 popped
stack.printStack();  // Output: 20 -> 10
stack.getSize();     // Output: 2
