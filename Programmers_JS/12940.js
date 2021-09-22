function solution(n, m) {
    const gcd = (a, b) => b ? gcd(b, a%b) : a;
    let tmp = gcd(n, m);
    return [tmp, n * m / tmp];
}