function solution(n) {
    let answer = '';
    while(n--) {
        answer = '124'[n%3] + answer;
        n = Math.floor(n/3);
    }
    return answer;
}