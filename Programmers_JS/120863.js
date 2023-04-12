// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
    const splits = polynomial.split(" ");
    const values = splits.filter((v) => v !== "+");

    const filterX = values.filter((v) => v.includes("x"));
    const parseX = filterX.map((v) => +(v.slice(0, -1) || 1));

    const filterN = values.filter((v) => !v.includes("x"));
    const parseN = filterN.map((v) => +v);

    const sum = (arr) => arr.reduce((acc, i) => acc + i, 0);

    const sumX = sum(parseX);
    const sumN = sum(parseN);

    if (!sumX) return `${sumN}`;
    if (!sumN) return `${sumX === 1 ? "" : sumX}x`;

    return `${sumX === 1 ? "" : sumX}x + ${sumN}`;
}
