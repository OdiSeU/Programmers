// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
    queries.forEach(([a, b]) => {
        for (let i = a; i <= b; i++) {
            arr[i]++;
        }
    });
    return arr;
}
