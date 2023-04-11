// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    const counts = [...s].reduce((acc, v) => {
        acc[v] = (acc[v] | 0) + 1;
        return acc;
    }, {});
    const onces = Object.entries(counts)
        .filter((v) => v[1] === 1)
        .map((v) => v[0]);

    return onces.sort().join("");
}
