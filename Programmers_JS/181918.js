/**
 *
 * @param {number[]} arr
 * @returns
 */
function solution(arr) {
    const stk = [];
    let i = 0;

    while (i < arr.length) {
        if (!stk.length) {
            stk.push(arr[i]);
            i++;
            continue;
        }
        if (stk.at(-1) < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }

    return stk;
}
