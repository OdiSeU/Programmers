// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let count = 0;
    let [tLen, pLen] = [t.length, p.length];

    for (let i = 0; i <= tLen - pLen; i++) {
        count += +t.slice(i, i + pLen) <= +p;
    }

    return count;
}
