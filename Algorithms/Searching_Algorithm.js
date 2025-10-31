/**
 * searching_algorithms.js
 *
 * This file implements and demonstrates several common searching algorithms in JavaScript.
 */

// --- 1. Linear Search ---
/**
 * Searches for a value in an array by checking every element sequentially.
 * Array to search in.
 * The value to search for.
 * The first index where the target is found, or -1 if not found.
 * Complexity Time: O(n), Space: O(1)
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return index
        }
    }
    return -1; // Target not found
}

// --- 2. Binary Search ---
/**
 * Efficiently searches for a value in a *sorted* array by
 * repeatedly dividing the search interval in half.
 * The *sorted* array to search in.
 * The value to search for.
 * An index where the target is found, or -1 if not found.
 * Complexity Time: O(log n), Space: O(1)
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate mid-point safely
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

// --- 3. Jump Search ---
/**
 * Searches a *sorted* array by "jumping" ahead by fixed steps
 * and then performing a linear search in the identified block.
 * The *sorted* array to search in.
 * The value to search for.
 * The first index where the target is found, or -1 if not found.
 * Complexity Time: O(sqrt(n)), Space: O(1)
 */
function jumpSearch(arr, target) {
    const n = arr.length;
    if (n === 0) return -1;

    // Determine the "jump" step size
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // 1. Find the block where the element might be present
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1; // Target is larger than all elements
        }
    }

    // 2. Perform a linear search within that block
    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }
    
    return -1; // Target not found
}

// --- 4. Interpolation Search ---
/**
 * An improvement over Binary Search for *sorted and uniformly distributed*
 * data. It estimates the position of the target based on its value.
 * The *sorted and uniformly distributed* array.
 * The value to search for.
 * An index where the target is found, or -1 if not found.
 * Complexity Time: O(log log n) on average, O(n) in worst case. Space: O(1)
 */
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    // Continue search as long as:
    // 1. The range [low, high] is valid
    // 2. The target is within the range of values [arr[low], arr[high]]
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        
        // Handle the case where values are the same to avoid division by zero
        if (arr[high] === arr[low]) {
            return (arr[low] === target) ? low : -1;
        }

        // Estimate the position (probe) using the interpolation formula
        // pos = low + [ (target - arr[low]) * (high - low) / (arr[high] - arr[low]) ]
        let pos = low + Math.floor(
            ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
        );

        if (arr[pos] === target) {
            return pos; // Target found
        }
        if (arr[pos] < target) {
            low = pos + 1; // Search in the right sub-array
        } else {
            high = pos - 1; // Search in the left sub-array
        }
    }
    return -1; // Target not found
}

// --- Graph Representation ---
// We'll use an adjacency list represented by a Map.
// This maps a node (key) to a list of its neighbors (Array).
// Example: Map<number, number[]>

// --- 5. Breadth-First Search (BFS) ---
/**
 * @brief Traverses a graph level by level. Used to find if a path
 * exists from a start node to a target node.
 * @param {Map<number, number[]>} adj The graph's adjacency list.
 * @param {number} startNode The node to begin the search from.
 * @param {number} target The node to search for.
 * @returns {boolean} true if the target node is reachable, false otherwise.
 * @complexity Time: O(V + E), Space: O(V) (V=Vertices, E=Edges)
 */
function bfs(adj, startNode, target) {
    // Check if the start node even exists in the graph
    if (!adj.has(startNode)) return false;

    let queue = [];     // Queue for nodes to visit (using array as queue)
    let visited = new Set(); // Set to track visited nodes

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        let u = queue.shift(); // Dequeue

        if (u === target) {
            return true; // Target found
        }

        // Visit all adjacent vertices
        // Check if node u has neighbors (it might be a node with no outgoing edges)
        if (adj.has(u)) {
            for (const v of adj.get(u)) {
                if (!visited.has(v)) {
                    visited.add(v);
                    queue.push(v); // Enqueue
                }
            }
        }
    }
    return false; // Target not found after traversing
}

// --- 6. Depth-First Search (DFS) ---

/**
 * @brief Recursive helper function for DFS.
 */
function dfsUtil(adj, u, target, visited) {
    visited.add(u);

    if (u === target) {
        return true; // Target found
    }

    // Check if node u has neighbors
    if (adj.has(u)) {
        // Recur for all adjacent vertices
        for (const v of adj.get(u)) {
            if (!visited.has(v)) {
                if (dfsUtil(adj, v, target, visited)) {
                    return true;
                }
            }
        }
    }
    return false; // Target not found in this path
}

/**
 * @brief Traverses a graph by exploring as far as possible along each
 * branch before backtracking. Used to find if a path exists.
 * @param {Map<number, number[]>} adj The graph's adjacency list.
 * @param {number} startNode The node to begin the search from.
 * @param {number} target The node to search for.
 * @returns {boolean} true if the target node is reachable, false otherwise.
 * @complexity Time: O(V + E), Space: O(V) (V=Vertices, E=Edges)
 */
function dfs(adj, startNode, target) {
    // Check if the start node even exists in the graph
    if (!adj.has(startNode)) return false;

    let visited = new Set();
    return dfsUtil(adj, startNode, target, visited);
}


// --- Main Demonstration ---
(function main() {
    console.log("--- Searching Algorithms Demonstration ---");

    // === 1. Array/Vector-Based Searches ===
    console.log("\n=== Array/Vector-Based Searches ===");
    
    const unsortedArr = [9, 4, 7, 2, 1, 5, 8, 3, 6, 0];
    const sortedArr   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 7;
    const missingTarget = 11;

    // --- Linear Search (on unsorted array) ---
    console.log("\n1. Linear Search (Unsorted Array):");
    console.log(`   Searching for ${target}: Index ${linearSearch(unsortedArr, target)}`);
    console.log(`   Searching for ${missingTarget}: Index ${linearSearch(unsortedArr, missingTarget)}`);

    // --- JavaScript Built-in: Array.indexOf (on unsorted array) ---
    console.log("\n*. JavaScript Built-in .indexOf (Unsorted Array):");
    let index = unsortedArr.indexOf(target);
    if (index !== -1) {
        console.log(`   Searching for ${target}: Found at index ${index}`);
    } else {
        console.log(`   Searching for ${target}: Not found`);
    }

    // --- Binary Search (on sorted array) ---
    console.log("\n2. Binary Search (Sorted Array):");
    console.log(`   Searching for ${target}: Index ${binarySearch(sortedArr, target)}`);
    console.log(`   Searching for ${missingTarget}: Index ${binarySearch(sortedArr, missingTarget)}`);

    // --- JavaScript Built-in: Array.includes (on sorted array) ---
    console.log("\n*. JavaScript Built-in .includes (Sorted Array):");
    if (sortedArr.includes(target)) {
        console.log(`   Searching for ${target}: Found`);
    } else {
        console.log(`   Searching for ${target}: Not found`);
    }
    
    // --- Jump Search (on sorted array) ---
    console.log("\n3. Jump Search (Sorted Array):");
    console.log(`   Searching for ${target}: Index ${jumpSearch(sortedArr, target)}`);
    console.log(`   Searching for ${missingTarget}: Index ${jumpSearch(sortedArr, missingTarget)}`);

    // --- Interpolation Search (on sorted, uniform array) ---
    console.log("\n4. Interpolation Search (Sorted Array):");
    console.log(`   Searching for ${target}: Index ${interpolationSearch(sortedArr, target)}`);
    console.log(`   Searching for ${missingTarget}: Index ${interpolationSearch(sortedArr, missingTarget)}`);

    // === 2. Graph-Based Searches ===
    console.log("\n=== Graph-Based Searches ===");
    
    // Create a simple graph
    //   0 --- 1 --- 3
    //   |     |
    //   2     4
    //         |
    //         5
    const graph = new Map();
    graph.set(0, [1, 2]);
    graph.set(1, [0, 3, 4]);
    graph.set(2, [0]);
    graph.set(3, [1]);
    graph.set(4, [1, 5]);
    graph.set(5, [4]);
    // Node 6 is disconnected
    graph.set(6, []);

    const startNode = 0;
    const graphTarget = 5;
    const missingGraphTarget = 6;

    // --- BFS ---
    console.log("\n5. Breadth-First Search (BFS):");
    console.log(`   Can we reach ${graphTarget} from ${startNode}? ${bfs(graph, startNode, graphTarget) ? "Yes" : "No"}`);
    console.log(`   Can we reach ${missingGraphTarget} from ${startNode}? ${bfs(graph, startNode, missingGraphTarget) ? "Yes" : "No"}`);

    // --- DFS ---
    console.log("\n6. Depth-First Search (DFS):");
    console.log(`   Can we reach ${graphTarget} from ${startNode}? ${dfs(graph, startNode, graphTarget) ? "Yes" : "No"}`);
    console.log(`   Can we reach ${missingGraphTarget} from ${startNode}? ${dfs(graph, startNode, missingGraphTarget) ? "Yes" : "No"}`);

})();
