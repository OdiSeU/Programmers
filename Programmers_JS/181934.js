// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
    return eval(`${n}${ineq}${eq === "=" ? "=" : ""}${m}`) ? 1 : 0;
}
