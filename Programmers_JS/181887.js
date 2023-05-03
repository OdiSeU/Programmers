// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
    const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);
    const odds = num_list.filter((_, i) => i % 2);
    const evens = num_list.filter((_, i) => !(i % 2));

    return Math.max(sum(odds), sum(evens));
}
