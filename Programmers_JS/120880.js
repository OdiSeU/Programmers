// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);

        return distA === distB ? b - a : distA - distB;
    });
}
