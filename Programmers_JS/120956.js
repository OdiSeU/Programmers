// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
    return babbling.filter(
        (word) => word.replace(/aya|ye|woo|ma/g, "").length === 0
    ).length;
}
