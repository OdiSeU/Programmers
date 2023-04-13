// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    let answer = 0;
    let cnt = ["a", 0, 0];

    for (let x of s) {
        if (cnt[1] === cnt[2]) {
            answer++;
            cnt[0] = x;
        }
        cnt[cnt[0] === x ? 1 : 2]++;
    }

    return answer;
}
