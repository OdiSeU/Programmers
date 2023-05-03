// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
    const len = Math.max(arr.length, arr[0].length);
    return [
        ...arr.map((v) => [
            ...v,
            ...Array(Math.max(0, len - v.length)).fill(0),
        ]),
        ...Array(Math.max(0, len - arr.length)).fill(Array(len).fill(0)),
    ];
}
