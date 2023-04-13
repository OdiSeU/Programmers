// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (let x of ingredient) {
        if (x === 1 && stack.slice(-3).join("") === "123") {
            count++;
            stack.pop();
            stack.pop();
            stack.pop();
        } else stack.push(x);
    }

    return count;
}
