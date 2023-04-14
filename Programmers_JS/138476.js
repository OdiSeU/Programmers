// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
    const counts = new Map();

    for (let t of tangerine) {
        counts.set(t, (counts.get(t) | 0) + 1);
    }

    const sorted = [...counts.values()].sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < sorted.length; i++) {
        sum += sorted[i];
        if (sum >= k) {
            return i + 1;
        }
    }
}
