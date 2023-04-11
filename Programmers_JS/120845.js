// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
    return box.map((v) => (v / n) | 0).reduce((acc, v) => acc * v, 1);
}
