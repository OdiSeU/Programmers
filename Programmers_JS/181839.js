// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
    if (a % 2 && b % 2) return a * a + b * b;
    if (!(a % 2) && !(b % 2)) return Math.abs(a - b);
    return 2 * (a + b);
}
