function solution(x, n) {
    let answer = [];
    for(let i=0, sum=x; i<n; i++, sum+=x)
        answer.push(sum)
    return answer;
}