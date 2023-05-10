// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
    const result = Array.from(Array(n), () => Array(n));
    let [r, c, x, v] = [0, -1, 0, 1];

    for (let i = 0; i < n; i++) {
        result[r][++c] = ++x;
    }

    while (--n) {
        for (let i = 0; i < n; i++) {
            r += v;
            result[r][c] = ++x;
        }
        v *= -1;
        for (let i = 0; i < n; i++) {
            c += v;
            result[r][c] = ++x;
        }
    }

    return result;
}
