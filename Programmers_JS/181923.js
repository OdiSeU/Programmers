// https://school.programmers.co.kr/learn/courses/30/lessons/181923?language=javascript

/**
 *
 * @param {number[]} arr
 * @param {number[][]} queries
 * @returns
 */
function solution(arr, queries) {
    const find = (s, e, k) => {
        const sliced = arr.slice(s, e + 1);
        const min = sliced.reduce((acc, v) => (v > k ? Math.min(acc, v) : acc), Infinity);
        return min === Infinity ? -1 : min;
    };

    return queries.map((v) => find(...v));
}
