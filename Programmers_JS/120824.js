// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    const odd = num_list.filter((v) => v % 2).length;
    return [num_list.length - odd, odd];
}
