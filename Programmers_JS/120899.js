// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
    return array.reduce((acc, v, i) => (acc[0] < v ? [v, i] : acc), [0, 0]);
}
