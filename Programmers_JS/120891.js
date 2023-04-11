// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
    return [...`${order}`].filter((v) => /[369]/.test(v)).length;
}
