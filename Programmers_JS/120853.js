// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    let sum = 0;
    const sArr = s.split(" ");

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === "Z") sum -= +sArr[i - 1];
        else sum += +sArr[i];
    }

    return sum;
}
