// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1, date2) {
    return new Date(...date1) < new Date(...date2) ? 1 : 0;
}
