// https://school.programmers.co.kr/learn/courses/30/lessons/181859

/**
 *
 * @param {number[]} arr
 * @returns
 */
function solution(arr) {
    const stk = [];

    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else if (stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
    }

    return stk.length ? stk : [-1];
}
