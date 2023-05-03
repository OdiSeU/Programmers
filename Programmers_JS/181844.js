// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
    const set = new Set(arr);
    delete_list.forEach((v) => set.delete(v));

    return [...set];
}
