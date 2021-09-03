function solution(n) {
    let answer = 1;
    for(let i = 2, c = 1; c < n; i++, c = (i-1)*i/2)
        if(Number.isInteger((n-c)/i)) answer++;
    return answer;
}