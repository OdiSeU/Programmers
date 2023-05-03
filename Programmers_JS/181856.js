// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
    const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);
    const [len1, len2] = [arr1.length, arr2.length];
    const [sum1, sum2] = [sum(arr1), sum(arr2)];
    if (len1 !== len2) return len1 < len2 ? -1 : 1;
    if (sum1 !== sum2) return sum1 < sum2 ? -1 : 1;
    return 0;
}
