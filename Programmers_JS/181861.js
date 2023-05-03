// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
    return arr.map((v) => Array(v).fill(v)).flat();
}
