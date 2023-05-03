// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
    return my_string.replace(new RegExp(alp, "g"), alp.toUpperCase());
}
