// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    let ranks = [];
    const getNewRanks = (ranks, score) =>
        [...ranks, score].sort((a, b) => b - a).slice(0, k);

    return score.map((v) => {
        ranks = getNewRanks(ranks, v);
        return ranks.at(-1);
    });
}
