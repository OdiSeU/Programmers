// https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number, n, m) {
    return number % n || number % m ? 0 : 1;
}
