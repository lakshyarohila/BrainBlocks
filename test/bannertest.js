const brain = require('brainblocks.js');

// 🎉 CLI Fun
brain.intro();

brain.quote();
brain.joke();
brain.motivate();
brain.say("Time to build your brain!");

// 🎒 Using Backpack (Stack)
const bag = new brain.Backpack(3);
bag.pack("📘 DSA Book");
bag.pack("📝 Notes");
console.log("Top of bag:", bag.peek()); // 📝 Notes
bag.unpack();
console.log("Top after unpacking:", bag.peek()); // 📘 DSA Book

// 📍 Using Line (Queue)
const line = new brain.Line(2);
line.join("Alice");
line.join("Bob");
console.log("First in line:", line.peek()); // Alice
line.leave(); // Removes Alice
console.log("Now first in line:", line.peek()); // Bob
