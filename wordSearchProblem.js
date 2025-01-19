let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

let target = "C"; // Jis value ka index dhundhna hai
let found = false;

// Matrix mein value ka index dhundhna
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === target) {
            console.log(`Value "${target}" found at index: [${i}, ${j}]`);
            found = true;
        }
    }
}

if (!found) {
    console.log(`Value "${target}" not found in the matrix.`);
}
