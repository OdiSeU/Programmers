// https://school.programmers.co.kr/learn/courses/30/lessons/181860

/**
 *
 * @param {number[]} arr
 * @param {boolean[]} flag
 * @returns
 */
function solution(arr, flag) {
    return arr.reduce((answer, v, i) => (flag[i] ? answer.concat(new Array(v * 2).fill(v)) : answer.slice(0, -v)), []);
}
