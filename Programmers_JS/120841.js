// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
    const isMinus = (x) => x < 0;
    const isDiff = (x, y) => isMinus(x) !== isMinus(y);
    const [x, y] = dot;

    return isMinus(y) * 2 + isDiff(x, y) + 1;
}
