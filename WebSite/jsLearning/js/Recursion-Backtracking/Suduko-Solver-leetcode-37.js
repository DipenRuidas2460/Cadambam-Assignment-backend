function isSafe(board, i, j, num) {
    for (let k = 0; k < 9; k++) {
        if (board[i][k] == num) return false
        if (board[k][j] == num) return false
        if (board[3 * Math.floor(i / 3) + Math.floor(k / 3)][3 * Math.floor(j / 3) + (k % 3)] == num) return false
    }
    return true
}
var solveSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == ".") {
                for (let num = 1; num <= 9; num++) {
                    if (isSafe(board, i, j, num.toString())) {
                        board[i][j] = num.toString()
                        if (solveSudoku(board) == false) board[i][j] = ".";
                        else return true;
                    }
                }
                return false
            }
        }
    }
    return true
};

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]));


// function solveSudoku(board) {
//     const n = board.length;
//     dfs(board, n);
// }

// function dfs(board, n) {
//     // for every cell in the sudoku
//     for (let row = 0; row < n; row++) {
//         for (let col = 0; col < n; col++) {
//             // if its empty
//             if (board[row][col] !== '.') continue;
//             // try every number 1-9
//             for (let i = 1; i <= 9; i++) {
//                 const c = i.toString();
//                 // if that number is valid
//                 if (isValid(board, row, col, n, c)) {
//                     board[row][col] = c;
//                     // continue search for that board, ret true if solution is reached
//                     if (dfs(board, n)) return true;
//                 }
//             }
//             // solution wasnt found for any num 1-9 here, must be a dead end...
//             // set the current cell back to empty
//             board[row][col] = '.';
//             // ret false to signal dead end 
//             return false;
//         }
//     }
//     // all cells filled, must be a solution
//     return true;
// }

// function isValid(board, row, col, n, c) {
//     const blockRow = Math.floor(row / 3) * 3;
//     const blockCol = Math.floor(col / 3) * 3;
//     for (let i = 0; i < n; i++) {
//         if (board[row][i] === c || board[i][col] === c) return false;
//         const curRow = blockRow + Math.floor(i / 3);
//         const curCol = blockCol + Math.floor(i % 3);
//         if (board[curRow][curCol] === c) return false;
//     }
//     return true;
// }