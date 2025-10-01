// segmentTree.js
// Advanced DSA in JavaScript: Segment Tree with Lazy Propagation

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.lazy = new Array(4 * this.n).fill(0);
    this.build(arr, 1, 0, this.n - 1);
  }

  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
    } else {
      let mid = Math.floor((start + end) / 2);
      this.build(arr, 2 * node, start, mid);
      this.build(arr, 2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  // push down lazy updates
  push(node, start, end) {
    if (this.lazy[node] !== 0) {
      this.tree[node] += (end - start + 1) * this.lazy[node];
      if (start !== end) {
        this.lazy[node * 2] += this.lazy[node];
        this.lazy[node * 2 + 1] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }
  }

  updateRange(l, r, val, node = 1, start = 0, end = this.n - 1) {
    this.push(node, start, end);

    if (start > r || end < l) return; // no overlap
    if (l <= start && end <= r) {
      this.lazy[node] += val;
      this.push(node, start, end);
      return;
    }

    let mid = Math.floor((start + end) / 2);
    this.updateRange(l, r, val, 2 * node, start, mid);
    this.updateRange(l, r, val, 2 * node + 1, mid + 1, end);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  queryRange(l, r, node = 1, start = 0, end = this.n - 1) {
    this.push(node, start, end);

    if (start > r || end < l) return 0; // no overlap
    if (l <= start && end <= r) return this.tree[node]; // full overlap

    let mid = Math.floor((start + end) / 2);
    return (
      this.queryRange(l, r, 2 * node, start, mid) +
      this.queryRange(l, r, 2 * node + 1, mid + 1, end)
    );
  }
}

// ----------------- DEMO -----------------
const arr = [1, 2, 3, 4, 5];
console.log("Initial array:", arr);

const st = new SegmentTree(arr);

// Range sum [0..4]
console.log("Sum [0..4]:", st.queryRange(0, 4));

// Update range [1..3] -> add 10
st.updateRange(1, 3, 10);
console.log("After update [1..3] +10");

// Queries
console.log("Sum [0..4]:", st.queryRange(0, 4));
console.log("Sum [1..3]:", st.queryRange(1, 3));
console.log("Sum [2..2]:", st.queryRange(2, 2));
