// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
    const counts = [];

    strArr.forEach((v) => {
        counts[v.length] = (counts[v.length] | 0) + 1;
    });

    return Math.max(...counts.filter((v) => v));
}
