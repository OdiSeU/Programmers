// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr) {
    return strArr.map((v, i) => (i % 2 ? v.toUpperCase() : v.toLowerCase()));
}
