function solution(board) {
    let answer = 0;
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++) {
            if(board[r][c]) {
                if(r!=0 && c!=0)
                    board[r][c] += Math.min(board[r-1][c-1],board[r][c-1],board[r-1][c]);
                answer = Math.max(answer, board[r][c]);
            }
        }
    }
    return answer * answer;
}