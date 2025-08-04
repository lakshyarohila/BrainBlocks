# 🧠 BrainBlocks

> **Build your brain, one block at a time.**

**BrainBlocks** is a fun and educational JavaScript library that helps you learn and use **Data Structures and Algorithms (DSA)** through creative naming, real logic (no shortcuts), and joyful CLI features like jokes and ASCII logos.

---

## 🚀 What Is BrainBlocks?

Instead of intimidating terms like `Stack` or `Queue`, BrainBlocks uses friendly, beginner-focused names:

| DSA Concept | BrainBlocks Name | Real-Life Analogy     |
|-------------|------------------|------------------------|
| Stack       | `Backpack`       | Packing/unpacking bag |
| Queue       | `Line`           | People in a line      |

It also includes **CLI tools** like `intro()`, `quote()`, and `joke()` to keep learning motivating and fun.

---

## 📦 Installation

```bash
npm install brainblocks


// index.js
const brain = require('brainblocks');

// CLI welcome
brain.intro();
brain.logo();
brain.say("Let’s learn data structures!");

// Use Backpack (Stack)
const bag = new brain.Backpack(2);
bag.pack("📘 DSA Book");
bag.pack("📝 Notebook");
console.log("Top item:", bag.peek());
bag.unpack();
console.log("Now top item:", bag.peek());

// Use Line (Queue)
const line = new brain.Line(2);
line.join("Alice");
line.join("Bob");
console.log("First in line:", line.peek());
line.leave();
