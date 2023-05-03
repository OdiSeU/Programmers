// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
    return arr.map((v) => {
        if (v >= 50 && v % 2 === 0) return v / 2;
        if (v < 50 && v % 2) return v * 2;
        return v;
    });
}
