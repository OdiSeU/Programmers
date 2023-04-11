// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
    const isLowerCase = (v) => /[a-z]/.test(v);
    const convert = (v) => (isLowerCase(v) ? v.toUpperCase() : v.toLowerCase());

    return [...my_string].map(convert).join("");
}
