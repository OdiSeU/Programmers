// https://school.programmers.co.kr/learn/courses/30/lessons/154538

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} n
 * @returns
 */
function solution(x, y, n) {
    const history = new Set([x]);

    if (x === y) return 0;

    for (let move = 1, queue = [x]; queue.length; move++) {
        const temp = [];
        for (const now of queue) {
            for (const next of [now + n, now * 2, now * 3]) {
                if (next === y) return move;
                if (next > y) continue;
                if (history.has(next)) continue;
                history.add(next);
                temp.push(next);
            }
        }
        queue = temp;
    }

    return -1;
}
