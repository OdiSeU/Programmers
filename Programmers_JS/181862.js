// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
    const result = myStr.split(/[abc]/).filter((v) => v);

    return result.length ? result : ["EMPTY"];
}
