// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
    return n * 12_000 + (k - Math.floor(n / 10)) * 2_000;
}
