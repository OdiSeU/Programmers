// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
    let answer = 0;

    for (let x of numbers) {
        if (answer > n) break;
        answer += x;
    }

    return answer;
}
