// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
    return [...`${n}`].reduce((acc, v) => acc + +v, 0);
}
