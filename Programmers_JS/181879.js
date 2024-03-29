// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    const mult = (acc, v) => acc * v;
    const add = (acc, v) => acc + v;

    return num_list.length > 10
        ? num_list.reduce(add, 0)
        : num_list.reduce(mult, 1);
}
