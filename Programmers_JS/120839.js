// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
    const win = {
        2: 0,
        0: 5,
        5: 2,
    };

    return [...rsp].map((v) => win[v]).join("");
}
