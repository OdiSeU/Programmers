// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
    const sums = new Set();
    const len = elements.length;

    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            sum += elements[(i + j) % len];
            sums.add(sum);
        }
    }

    return sums.size;
}
