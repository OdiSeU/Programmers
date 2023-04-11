// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
    let seive = Array(n + 1).fill(true);
    seive[0] = seive[1] = false;
    for (let i = 2; i <= n + 1; i++) {
        if (!seive[i]) continue;
        for (let j = i * i; j <= n; j += i) seive[j] = false;
    }

    return n - seive.filter((v) => v).length - 1;
}
