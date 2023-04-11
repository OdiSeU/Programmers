// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
    const sqrtN = Math.sqrt(n);
    let result = 0;
    let div = 0;
    for (div = 0; div < sqrtN; div++) {
        if (n % div === 0) {
            result++;
        }
    }

    return result * 2 + (div ** 2 === n);
}
