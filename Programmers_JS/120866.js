// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
    const n = board.length;
    const checkArea = (r, c) => {
        const isInArea = (x) => 0 <= x && x < n;
        for (let i of [-1, 0, 1]) {
            for (let j of [-1, 0, 1]) {
                if (isInArea(r + i) && isInArea(c + j))
                    board[r + i][c + j] |= 2;
            }
        }
    };
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] & 1) {
                checkArea(i, j);
            }
        }
    }

    return board.flat().filter((v) => v === 0).length;
}
