// https://school.programmers.co.kr/learn/courses/30/lessons/12902

function solution(n) {
    const memoi = [1, 0, 3];
    const MOD = 1_000_000_007;

    for (let i = 4; i <= n; i += 2) {
        memoi[i] = (memoi[i - 2] * 3) % MOD;
        for (let j = 0; j <= i - 4; j += 2) {
            memoi[i] = (memoi[i] + memoi[j] * 2) % MOD;
        }
    }

    return memoi[n];
}
