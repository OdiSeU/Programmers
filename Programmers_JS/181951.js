// https://school.programmers.co.kr/learn/courses/30/lessons/181951

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a, b;

rl.on("line", function (line) {
    [a, b] = line.split(" ");
}).on("close", function () {
    console.log(`a = ${a}\nb = ${b}`);
});
