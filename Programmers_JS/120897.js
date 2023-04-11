// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
    const div1 = [];
    const div2 = [];
    const sqrtN = Math.sqrt(n);
    let i;
    for (i = 1; i < sqrtN; i++) {
        if (n % i === 0) {
            div1.push(i);
            div2.push(n / i);
        }
    }
    if (i ** 2 === n) {
        div1.push(sqrtN);
    }

    return [...div1, ...div2.reverse()];
}
