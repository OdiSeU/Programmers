// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
    const convert = {
        1: "w",
        "-1": "s",
        10: "d",
        "-10": "a",
    };

    return numLog
        .slice(1)
        .map((v, i) => {
            return convert[v - numLog[i]];
        })
        .join("");
}
