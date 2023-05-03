// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board, k) {
    let sum = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i + j <= k) {
                sum += board[i][j];
            }
        }
    }

    return sum;
}
