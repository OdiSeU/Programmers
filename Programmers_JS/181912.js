// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
