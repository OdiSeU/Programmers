function solution(n, edge) {
    let check = Array(n+1), edges = Array.from(Array(n+1), _=>[]);
    let queue = [[1, 0]], cnt = [0, 1];
    
    edge.forEach(v => {
        edges[v[0]].push(v[1]);
        edges[v[1]].push(v[0]);
    })
    
    check[1] = true;
    
    while(queue.length) {
        let [i, v] = queue.shift();
        edges[i].forEach(e => {
            if(!check[e]) {
                check[e] = true;
                queue.push([e, v+1]);
                if(cnt[0] < v+1) cnt = [v+1, 1];
                else if(cnt[0] === v+1) cnt[1]++;
            }
        })
    }
    
    return cnt[1];
}