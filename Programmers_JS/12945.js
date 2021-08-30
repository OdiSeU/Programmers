function solution(n) {
    let x0 = 1, x1 = 1, mod = 1234567;
    for(let i = 3; i <= n; i++) [x0, x1] = [x1, (x0 + x1) % mod];
    return x1;
}