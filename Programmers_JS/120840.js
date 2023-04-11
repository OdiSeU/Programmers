// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
    let answer = BigInt(1);
    for (let i = 0; i < share; i++) {
        answer *= BigInt(balls - i);
    }
    for (let i = 0; i < share; i++) {
        answer /= BigInt(share - i);
    }
    return answer;
}
