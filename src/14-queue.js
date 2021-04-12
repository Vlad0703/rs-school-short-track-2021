class Queue {
  constructor () {
    this.old = 1;
    this.newest = 1;
    this.obj = {};
  }

  enqueue(data) {
    this.obj[this.newest] = data;
    this.newest++;
  }

  dequeue() {
    let deletedData;

    if (this.old !== this.newest) {
      deletedData = this.obj[this.old];
      delete this.obj[this.old];
      this.old++;
    }
    return deletedData;
  }
}

module.exports = Queue;
