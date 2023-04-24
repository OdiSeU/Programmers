// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
    return [...str1].map((v, i) => v + str2[i]).join("");
}
