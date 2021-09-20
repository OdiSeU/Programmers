function solution(n, results) {
    let cnt = 0;
    let loseGraph = Array.from(Array(n), ()=>new Set());
    let winGraph = Array.from(Array(n), ()=>new Set());
    
    results.forEach(v => {
        winGraph[v[0]-1].add(v[1]-1);
        loseGraph[v[1]-1].add(v[0]-1);
    });
    
    for(let i = 0; i < n; i++) {
        winGraph[i].forEach(win =>
            loseGraph[i].forEach(lose => loseGraph[win].add(lose))
        );
        loseGraph[i].forEach(lose =>
            winGraph[i].forEach(win => winGraph[lose].add(win))
        );
    }
    
    for(let i = 0; i < n; i++)
        if(winGraph[i].size + loseGraph[i].size === n-1)
            cnt++;
    
    return cnt;
}