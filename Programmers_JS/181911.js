// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
    const result = [];

    for (let i = 0; i < parts.length; i++) {
        const [a, b] = parts[i];
        result.push(my_strings[i].slice(a, b + 1));
    }

    return result.join("");
}
