// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
    return array
        .map((v) => [...`${v}`].filter((v) => v === "7").length)
        .reduce((acc, v) => acc + v);
}
