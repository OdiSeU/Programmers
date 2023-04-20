// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2n; i * i <= n; i++) {
        if (n % i === 0n) return false;
    }
    return true;
}

function solution(n, k) {
    const baseK = n
        .toString(k)
        .split("0")
        .map((v) => +v);

    return baseK.filter((v) => isPrime(BigInt(v))).length;
}
