// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
    const to10 = (n) => +`0b${n}`;
    const to2 = (n) => n.toString(2);

    return to2(to10(bin1) + to10(bin2));
}
