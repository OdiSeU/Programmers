function solution(n) {
    let answer = [];
    while(n) {
        answer.push(n % 10);
        n = n/10|0;
    }
    return answer;
}