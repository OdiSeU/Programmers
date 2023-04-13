// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    let count = 0;

    while (n >= a) {
        const newBottle = ((n / a) | 0) * b;
        count += newBottle;
        n = newBottle + (n % a);
    }

    return count;
}
