// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
    const len = 2 ** Math.ceil(Math.log2(arr.length)) - arr.length;

    return [...arr, ...Array(len).fill(0)];
}
