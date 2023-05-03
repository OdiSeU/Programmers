// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
    return [...code].filter((_, i) => i % q === r).join("");
}
