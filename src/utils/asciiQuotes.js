function asciiBox(text) {
  const border = "═".repeat(text.length + 4);
  return `╔${border}╗\n║  ${text}  ║\n╚${border}╝`;
}

const quotes = [
  "Push your limits. Pop your doubts.",
  "You're not stuck — you're building your brain.",
  "Every node counts. So do you.",
  "Keep linking. Keep learning.",
  "Stacks build muscles. And minds. 🧠"
];

const jokes = [
  "Why did the stack break up with the queue? It needed space!",
  "LinkedLists hate breakups. Too many pointers left behind!",
  "I asked the tree if it had depth. It said 'leaves me alone!'"
];

const motivations = [
  "You’ve already come so far. One block at a time!",
  "Mistakes are just pointers to growth.",
  "No recursion. Just repeat. You got this!"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function quote() {
  console.log(asciiBox(random(quotes)));
}

function joke() {
  console.log(asciiBox(random(jokes)));
}

function motivate() {
  console.log(asciiBox(random(motivations)));
}

module.exports = { quote, joke, motivate };
