// https://school.programmers.co.kr/learn/courses/30/lessons/12929

function solution(n) {
    const memoi = [1, 1];
    for (let i = 1; i < n; i++) {
        let n = 0;
        for (let j = 0; j <= i; j++) {
            n += memoi[j] * memoi[i - j];
        }
        memoi.push(n);
    }

    return memoi[n];
}
