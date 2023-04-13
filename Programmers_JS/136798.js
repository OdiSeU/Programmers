// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
    const divCounts = Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divCounts[j]++;
        }
    }

    return divCounts.reduce((acc, v) => acc + (v > limit ? power : v), 0);
}
