// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
    const means = score.map((v) => (v[0] + v[1]) / 2);
    const sorted = [...means].sort((a, b) => b - a);
    const ranks = [];
    sorted.forEach((v, i) => {
        const rank = sorted[i - 1] === v ? ranks.at(-1) : i + 1;
        ranks.push(rank);
    });

    return means.map((v) => ranks[sorted.indexOf(v)]);
}
