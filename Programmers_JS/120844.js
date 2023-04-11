// https://school.programmers.co.kr/learn/courses/30/lessons/120844/solution_groups?language=javascript

function solution(numbers, direction) {
    switch (direction) {
        case "right":
            numbers.unshift(numbers.pop());
            break;
        case "left":
            numbers.push(numbers.shift());
            break;
    }

    return numbers;
}
