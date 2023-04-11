// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    const isNumber = (v) => /[0-9]/.test(v);

    return [...my_string]
        .filter(isNumber)
        .map((v) => +v)
        .sort((a, b) => a - b);
}
