function solution(n) {
    let ans = 0;
    while(n) {
        ans += n % 10;
        n = n / 10 | 0;
    }
    return ans;
}