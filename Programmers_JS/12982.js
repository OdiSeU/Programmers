function solution(d, budget) {
    let i=0;
    d.sort((a,b)=>a-b);
    for(; i<d.length; i++) {
        budget -= d[i];
        if(budget < 0) break;
    }
    return i;
}