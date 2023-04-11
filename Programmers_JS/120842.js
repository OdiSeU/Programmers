// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
    return Array.from(Array(num_list.length / n), (_, i) =>
        num_list.slice(n * i, n * (i + 1))
    );
}
