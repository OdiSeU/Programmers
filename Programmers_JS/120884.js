// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
    let count = 0;
    while (chicken >= 10) {
        count += (chicken / 10) | 0;
        chicken = ((chicken / 10) | 0) + (chicken % 10);
    }
    return count;
}
