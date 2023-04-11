// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
    return Array.from(Array(((n + 1) / 2) | 0), (_, i) => i * 2 + 1);
}
