// https://school.programmers.co.kr/learn/courses/30/lessons/181858

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns
 */
function solution(arr, k) {
    const result = [...new Set(arr)];
    const left = k - result.length;

    if (left < 0) {
        return result.slice(0, k);
    }

    return result.concat(new Array(left).fill(-1));
}
