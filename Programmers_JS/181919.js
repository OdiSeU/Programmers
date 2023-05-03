// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
    const result = [];
    while (n !== 1) {
        result.push(n);
        n = n % 2 ? n * 3 + 1 : n / 2;
    }
    return [...result, 1];
}
