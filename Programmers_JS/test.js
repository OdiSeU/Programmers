function solution(n, record) {
    var server = [], answer = [];
    for(let i=0; i<n; i++) {
        server.push([]);
    }
    for(let i in record) {
        let exp = record[i].split(' ');
        let idx = exp[0] - '1';
        let name = exp[1];
        
        if(!server[idx].includes(name)) {
            if(server[idx].length > 4) server[idx].shift();
            server[idx].push(name);
        }
    }
    for(let i in server) {
        for(let j in server[i]) {
            answer.push(server[i][j]);
        }
    }
    return answer;
}

function solution(m, v) {
    let board = [m];
    for(let i in v) {
        let j = board.length;
        while(j--) {
            if(board[j] < v[i]) break;
        }
        if(j == board.length-1) board.push(m-v[i]);
        else board[j+1] -= v[i];
    }
    return board.length;
}


let visited = [], max_cnt=0, now_cnt, graph;

function solution(next_student) {
    let answer, size = next_student.length;
    graph = next_student;
    for(let i=size-1; i>=0; i--) {
        visited = Array.from({length:size},()=>false);
        now_cnt = 0;
        DFS(i);
        if(now_cnt > max_cnt) {
            max_cnt = now_cnt
            answer = i+1
        }
    }
    return answer;
}

function DFS(idx) {
    visited[idx] = true;
    now_cnt++;
    let next = graph[idx]-1;
    if(!visited[next]) DFS(next);
}