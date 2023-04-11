// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
    let count = (hp / 5) | 0;
    hp %= 5;
    count += (hp / 3) | 0;
    hp %= 3;

    return count + hp;
}
