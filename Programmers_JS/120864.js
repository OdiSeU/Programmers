// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).reduce((acc, v) => acc + +v, 0);
}
