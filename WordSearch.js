/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

*/




/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    const cols = board[0].length;
    const rows = board.length;

    const depthFirstSearch = (row, col, letter) => {
        // base case
        if (letter === word.length) {
            return true;
        }

        // chseck edge and if the current cell matches the word[index]
        if (row < 0 || col < 0 || 
            row >= rows || col >= cols ||
            board[row][col] !== word[letter]) 
            {
                return false;
            }


        // Mark the cell as visited
        const temp = board[row][col];
        board[row][col] = '*';

        // Check adjacents recursively
        const found = 
        depthFirstSearch(row + 1, col, letter + 1) ||
        depthFirstSearch(row - 1, col, letter + 1) ||
        depthFirstSearch(row, col + 1, letter + 1) ||
        depthFirstSearch(row, col - 1, letter + 1);

        board[row][col] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && depthFirstSearch(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};