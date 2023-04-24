// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
    const arr = Array.from(Array(n + 1), (_, i) => (i % 2 ? i : i * i));

    return arr
        .slice(0, n + 1)
        .filter((_, i) => i % 2 === n % 2)
        .reduce((acc, v) => acc + v, 0);
}
