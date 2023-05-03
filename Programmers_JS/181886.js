// https://school.programmers.co.kr/learn/courses/30/lessons/181886

function solution(names) {
    return names.filter((_, i) => !(i % 5));
}
