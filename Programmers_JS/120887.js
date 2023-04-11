// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let count = 0;

    for (let x = i; x <= j; x++) {
        count += [...`${x}`].filter((v) => +v === k).length;
    }

    return count;
}
