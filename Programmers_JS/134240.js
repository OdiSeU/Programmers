// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let result = "";

    for (let i = 1; i < food.length; i++) {
        result += `${i}`.repeat(food[i] >> 1);
    }

    return result + "0" + [...result].reverse().join("");
}
