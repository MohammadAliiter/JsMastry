// Method 1: Brute Force (O(n²) Time Complexity)
const leaderInArrayBruteForce = (arr, n) => {
    const leaders = [];
    
    for (let i = 0; i < n; i++) {
        let isLeader = true;

        for (let j = i + 1; j < n; j++) {
            if (arr[i] <= arr[j]) {
                isLeader = false;
                break;
            }
        }

        if (isLeader) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
};

let arr1 = [12, 21, 50, 30, 10, 5];
let n1 = arr1.length;
console.log("Brute Force Leaders:", leaderInArrayBruteForce(arr1, n1));


// Method 2: Optimized Approach (O(n) Time Complexity) - Right-to-Left Scan
const leaderInArrayOptimized = (arr, n) => {
    let leaders = [];
    let maxRight = arr[n - 1];

    leaders.push(maxRight); // Rightmost element is always a leader

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            leaders.push(arr[i]);
        }
    }

    return leaders.reverse(); // Reverse to maintain original order
};

let arr2 = [12, 21, 50, 30, 10, 5];
let n2 = arr2.length;
console.log("Optimized Leaders:", leaderInArrayOptimized(arr2, n2));
