// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
    const reshaped = [];

    for (let i = 0; i < my_string.length; i += m) {
        reshaped.push(my_string.slice(i, i + m + 1));
    }

    return reshaped.map((v) => v[c - 1]).join("");
}
