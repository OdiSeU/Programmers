// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
    let answer = 1;

    for (let i = 1; answer * i <= n; answer++) {
        i *= answer;
    }

    return answer - 1;
}
