// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const lcm = (a, b) => (a * b) / gcd(a, b);

    return lcm(n, 6) / 6;
}
