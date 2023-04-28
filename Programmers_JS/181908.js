// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
    return new RegExp(is_suffix + "$").test(my_string) ? 1 : 0;
}
