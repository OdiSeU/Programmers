// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
    const getCounts = (n) => {
        const counts = Array(10).fill(0);
        [...n].forEach((v) => counts[v]++);
        return counts;
    };
    const countsX = getCounts(X);
    const countsY = getCounts(Y);
    const minCounts = Array.from(countsX, (v, i) => Math.min(v, countsY[i]));
    const cvtCounts = minCounts.map((v, i) => `${i}`.repeat(v));
    const result = cvtCounts.reverse().join("");

    if (result === "") return "-1";
    if (result[0] === "0") return "0";
    return result;
}
