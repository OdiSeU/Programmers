// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
    let answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    for (let i = 0, j = 0; i < A.length; i++, j++) {
        while (A[i] >= B[j]) j++;
        if (j >= B.length) break;
        answer++;
    }

    return answer;
}
