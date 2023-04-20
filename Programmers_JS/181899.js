// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
    return Array.from(Array(start - end + 1), (_, i) => start - i);
}
