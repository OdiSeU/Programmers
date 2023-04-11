// https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    const n = Number(input[0]);
    const stars = Array.from(Array(n), (_, i) => "*".repeat(i + 1));

    console.log(stars.join("\n"));
});
