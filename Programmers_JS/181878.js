// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function solution(myString, pat) {
    return myString.toLowerCase().indexOf(pat.toLowerCase()) < 0 ? 0 : 1;
}
