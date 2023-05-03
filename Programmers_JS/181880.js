// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
    return num_list
        .map((v) => v.toString(2).length - 1)
        .reduce((acc, v) => acc + v, 0);
}
