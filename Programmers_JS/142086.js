// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    return [...s].map((v, i, arr) => {
        const idx = arr.lastIndexOf(v, i - 1);
        if (i === 0 || idx === -1) return -1;
        return i - idx;
    });
}
