// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
    const result = [];

    for (let i = k; i <= n; i += k) {
        result.push(i);
    }

    return result;
}
