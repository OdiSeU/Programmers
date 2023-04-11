// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
    const [a, b, c] = sides.sort();
    return a + b > c ? 1 : 2;
}
