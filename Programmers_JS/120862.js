// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    numbers.sort((a, b) => a - b);

    return Math.max(
        numbers.at(0) * numbers.at(1),
        numbers.at(-1) * numbers.at(-2)
    );
}
