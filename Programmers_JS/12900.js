function solution(n) {
    let a = 1, b = 1;
    for(let i = 1; i < n; i++)
        [a, b] = [b, (a + b) % 1000000007];
    return b;
}