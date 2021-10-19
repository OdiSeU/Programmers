function solution(x) {
    let sum = 0, n = x;
    while(n) {
        sum += n % 10
        n = n / 10 | 0
    }
    return x % sum === 0
}