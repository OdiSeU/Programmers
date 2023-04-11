// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    const x = [...new Set(dots.map((v) => v[0]))];
    const y = [...new Set(dots.map((v) => v[1]))];

    return Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
}
