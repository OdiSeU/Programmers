// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
    let num3x = 0;
    const isContain3 = (x) => /3/.test(`${x}`);
    const isMultNumOf3 = (x) => x % 3 === 0;
    for (let i = 0; i < n; i++) {
        do num3x++;
        while (isContain3(num3x) || isMultNumOf3(num3x));
    }
    return num3x;
}
