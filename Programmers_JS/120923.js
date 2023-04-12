// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
    const first = total / num - (num - 1) / 2;
    return Array.from(Array(num), (_, i) => first + i);
}
