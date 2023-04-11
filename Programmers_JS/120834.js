// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
    const convert = (x) => String.fromCharCode(97 + x);

    return [...`${age}`].map((v) => convert(+v)).join("");
}
