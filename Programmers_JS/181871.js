// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }

    return count;
}
