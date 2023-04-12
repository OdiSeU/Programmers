// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
    let result = 0;
    for (let i = 0; i < A.length; i++, result++) {
        if (A === B) return result;
        A = A.slice(-1) + A.slice(0, -1);
    }
    return -1;
}
