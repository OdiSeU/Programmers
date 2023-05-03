// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
    const powSum = (n) => a ** n + b ** n + c ** n;

    if (a !== b && b !== c && c !== a) return powSum(1);
    if (a === b && b === c && c === a) return powSum(1) * powSum(2) * powSum(3);
    return powSum(1) * powSum(2);
}
