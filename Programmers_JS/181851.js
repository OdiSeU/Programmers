// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
    const rankWithIndex = rank.map((v, i) => [v, i]);
    const filtered = rankWithIndex.filter((_, i) => attendance[i]);
    const ordered = filtered.sort((a, b) => a[0] - b[0]);
    const indexed = ordered.map((v) => v[1]);
    const [a, b, c, _] = indexed;

    return a * 10000 + b * 100 + c;
}
