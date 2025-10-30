// N-Queens problem using backtracking
function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill(".")); // Create n×n board
  const result = [];

  // Helper function to check if placing a queen is safe
  function isSafe(row, col) {
    // Check the same column above
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true; // Safe position
  }

  // Backtracking function
  function solve(row) {
    // Base case: all queens are placed
    if (row === n) {
      // Push a copy of current board to result
      result.push(board.map(r => r.join("")));
      return;
    }

    // Try placing queen in each column of current row
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";   // Place queen
        solve(row + 1);          // Move to next row
        board[row][col] = ".";   // Backtrack (remove queen)
      }
    }
  }

  solve(0); // Start from row 0
  return result;
}

// Example usage
const n = 4;
const solutions = solveNQueens(n);

console.log(`Total solutions for ${n}-Queens: ${solutions.length}`);
solutions.forEach((sol, i) => {
  console.log(`\nSolution ${i + 1}:`);
  sol.forEach(row => console.log(row));
});
