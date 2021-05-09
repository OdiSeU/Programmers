function solution(N, stages) {
    let left = stages.length;
    let failRate = Array.from(Array(N),(_,i)=>[i+1, 0]);
    stages.forEach(i => { if(i<=N)failRate[i-1][1]++ });
    for(let i=0; i<N; i++) {
        let cnt = failRate[i][1];
        failRate[i][1] /= left;
        left -= cnt;
        if(left == 0) break;
    }
    return failRate.sort((a,b)=>b[1]-a[1]).map(i=>i[0]);
}