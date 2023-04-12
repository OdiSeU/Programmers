// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
    const isAddSeq = (arr) => arr[0] - arr[1] === arr[1] - arr[2];
    if (isAddSeq(common)) return common.at(-1) + common[1] - common[0];
    return (common.at(-1) * common[1]) / common[0];
}
