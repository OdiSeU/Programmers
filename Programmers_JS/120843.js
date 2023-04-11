// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
    const odds = numbers.filter((v) => v % 2 !== 0);
    const evens = numbers.filter((v) => v % 2 === 0);
    const orders = numbers.length % 2 ? [...odds, ...evens] : odds;

    return orders[(k - 1) % orders.length];
}
