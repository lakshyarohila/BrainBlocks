<h1 align="center">🧠 BrainBlocks</h1>
<p align="center">A fun, beginner-friendly JavaScript DSA library — build your brain, one block at a time!</p>

---

## 🚀 Overview

**BrainBlocks** is a playful and educational JavaScript library for learning and using Data Structures and Algorithms (DSA).  
It uses memorable names like:

- 🎒 `Backpack` → Stack  
- 📍 `Line` → Queue  
- 🎉 ASCII CLI Utilities (intro, logo, quote, joke, etc.)

---

## 📦 Installation

```bash
npm install brainblocks.js


| Function     | Output                             |
| ------------ | ---------------------------------- |
| `intro()`    | Prints welcome message             |
| `logo()`     | BrainBlocks ASCII banner logo      |
| `say("msg")` | Prints 🧱 followed by your message |
| `quote()`    | Random DSA quote in a box          |
| `joke()`     | Random developer joke              |
| `motivate()` | Prints encouragement               |


const brain = require('brainblocks.js');

brain.intro();
brain.logo();
brain.say("Let's master DSA!");
brain.quote();

| Method       | Description                    |
| ------------ | ------------------------------ |
| `pack(item)` | Push item onto the stack       |
| `unpack()`   | Pop the top item               |
| `peek()`     | View top item without removing |
| `isEmpty()`  | Check if the stack is empty    |
| `size()`     | Number of items in the stack   |


*** how to use it ***


const brain = require('brainblocks.js');
const bag = new brain.Backpack(3);

bag.pack("📘 Book");
bag.pack("📝 Notes");
console.log(bag.peek()); // 📝 Notes
bag.unpack();            // Removes Notes
console.log(bag.peek()); // 📘 Book


***Queue***

| Method       | Description                      |
| ------------ | -------------------------------- |
| `join(item)` | Add item to the end of queue     |
| `leave()`    | Remove item from the front       |
| `peek()`     | View first item without removing |
| `isEmpty()`  | Check if queue is empty          |
| `size()`     | Number of items in the queue     |





const line = new brain.Line(2);
line.join("Alice");
line.join("Bob");
console.log(line.peek()); // Alice
line.leave();
console.log(line.peek()); // Bob
