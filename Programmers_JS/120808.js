// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const gcd = getGCD(numer, denom);

    return [numer / gcd, denom / gcd];
}
