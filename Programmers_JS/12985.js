function solution(n,a,b) {
    let answer = 0;
    a--; b--;
    while(a!==b) {
        answer++;
        a >>= 1;
        b >>= 1;
    }
    return answer;
}