// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
    return arr.map((v, i) => (arr.length % 2 ^ i % 2) * n + v);
}
