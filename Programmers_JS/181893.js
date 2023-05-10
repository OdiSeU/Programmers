// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
    const result = query.reduce(
        (acc, v, i) => (i % 2 ? acc.slice(v) : acc.slice(0, v + 1)),
        arr
    );
    return result.length ? result : [-1];
}
