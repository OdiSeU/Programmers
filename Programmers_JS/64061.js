function solution(board, moves) {
    let answer = 0;
    const stack = new Array();

    for(let i in moves) {
        let picked = pickDoll(board, moves[i]-1);
        if(!picked) continue;
        if(stack.length==0 || picked!=stack[stack.length-1]) {
            stack.push(picked);
        } else {
            stack.pop();
            answer += 2;
        }
    }

    return answer;
}

function pickDoll(board, idx) {
    let type = 0;
    for(let depth=0;depth<board.length; depth++) {
        if(board[depth][idx]!=0){
            type = board[depth][idx];
            board[depth][idx] = 0;
            return type;
        }
    }
    return type;
}