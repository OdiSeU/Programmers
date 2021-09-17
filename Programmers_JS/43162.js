function solution(n, computers) {
    let check = Array(n);
    let answer = 0;
    
    const dfs = (idx) => {
        for(let i = 0; i < n; i++) {
            if(!check[i] && computers[idx][i]) {
                check[i] = true;
                dfs(i);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!check[i]) {
            check[i] = true;
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}