function solution(n) {
    let answer = 0;
    let seive = Array.from(Array(n+1), ()=>true);
    seive[0] = seive[1] = false;
    for(let i = 2; i <= n; i++) {
        if(seive[i]) {
            answer++;
            for(let j = i * i; j <= n; j += i)
                seive[j] = false;
        }
    }
    return answer;
}