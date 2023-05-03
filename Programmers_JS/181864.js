// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
    const cnvt = { A: "B", B: "A" };
    const cnvted = [...myString].map((v) => cnvt[v]).join("");

    return cnvted.indexOf(pat) < 0 ? 0 : 1;
}
