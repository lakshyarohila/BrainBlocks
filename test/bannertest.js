const brain = require('brainblocks.js');

// 🎉 CLI Fun

// 🎒 Using Backpack (Stack)
const bag = new brain.Backpack(5);

bag.pack(2)
bag.pack(3)
bag.pack(3)
bag.pack(6)
console.log("Top after pack:", bag.peek());
bag.unpack()
console.log("Top after unpack:", bag.peek());