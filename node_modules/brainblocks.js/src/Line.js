class Line {
  constructor(size = 100) {
    this.items = [];
    this.capcity = size;
  }

  join(item) {
    if (this.items.length >= this.capcity) {
      throw new Error("Line is full");
    }
    this.items.push(item);
  }

  leave() {
    if (this.isEmpty()) {
      throw new Error("Line is empty");
    }
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
module.exports = Line;