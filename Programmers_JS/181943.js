// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);
    const mid = overwrite_string;
    const end = my_string.slice(s + mid.length);
    return front + mid + end;
}
