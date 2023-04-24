// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line;
}).on("close", function () {
    console.log(solution(input));
});

function solution(str) {
    const isLowerCase = (c) => "a" <= c && c <= "z";

    return [...str]
        .map((v) => (isLowerCase(v) ? v.toUpperCase() : v.toLowerCase()))
        .join("");
}
