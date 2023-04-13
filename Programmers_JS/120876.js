// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
    const stacks = [];

    lines.forEach(([a, b]) => {
        for (let i = a; i < b; i++) {
            stacks[i + 100] = (stacks[i + 100] | 0) + 1;
        }
    });

    return stacks.filter((v) => v > 1).length;
}
