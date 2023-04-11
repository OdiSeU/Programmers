// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
    const isNumber = (x) => /[0-9]/.test(x);
    const num_string = [...my_string].filter((v) => isNumber(v));
    return num_string.reduce((acc, v) => acc + +v, 0);
}
