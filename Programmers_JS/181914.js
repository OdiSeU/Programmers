// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
    return [...number].reduce((acc, v) => acc + +v, 0) % 9;
}
