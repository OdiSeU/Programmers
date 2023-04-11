// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
    const set2 = new Set(s2);

    return s1.filter((v) => set2.has(v)).length;
}
