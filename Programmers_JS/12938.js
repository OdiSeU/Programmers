function solution(n, s) {
    if(n > s) return [-1];
    let answer = [], tmp;
    while(n) {
        tmp = s / n-- | 0;
        answer.push(tmp);
        s -= tmp;
    }
    return answer;
}