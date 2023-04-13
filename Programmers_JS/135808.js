// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    return score
        .filter((_, i) => (i + 1) % m === 0)
        .reduce((acc, v) => acc + v * m, 0);
}
