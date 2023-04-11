// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
    return [...cipher].filter((_, i) => (i + 1) % code === 0).join("");
}
