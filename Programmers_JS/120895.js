// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
    const copy = [...my_string];

    [copy[num1], copy[num2]] = [copy[num2], copy[num1]];

    return copy.join("");
}
