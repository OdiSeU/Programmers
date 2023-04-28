// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
    const odd = +num_list.filter((v) => v % 2).join("");
    const even = +num_list.filter((v) => !(v % 2)).join("");

    return odd + even;
}
