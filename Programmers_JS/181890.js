// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(str_list) {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") return str_list.slice(0, i);
        if (str_list[i] === "r") return str_list.slice(i + 1);
    }
    return [];
}
