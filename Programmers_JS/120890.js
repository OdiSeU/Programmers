// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
    return array.reduce((acc, v) => {
        const subAcc = Math.abs(acc - n);
        const subV = Math.abs(v - n);
        if (subAcc < subV) return acc;
        if (subAcc > subV) return v;
        return Math.min(acc, v);
    });
}
