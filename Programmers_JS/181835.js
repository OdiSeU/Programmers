// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
    const calc = k % 2 ? (v) => v * k : (v) => v + k;
    return arr.map((v) => calc(v));
}
