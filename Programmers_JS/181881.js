// https://school.programmers.co.kr/learn/courses/30/lessons/181881

/**
 *
 * @param {number[]} arr
 * @returns
 */
function solution(arr) {
    let answer = 0;
    const getX = (n) => {
        if (n < 50 && n % 2 === 0) return 0;
        if (n > 50 && n % 2 === 1) return 0;
        if (n === 1) return 5;
        if (n < 6) return 4;
        if (n < 12) return 3;
        if (n < 24) return 2;
        if (n < 50) return 1;
        if (n === 100) return 3;
        if (n % 4 === 0) return 1;
        return 2;
    };

    for (const n of arr) {
        answer = Math.max(answer, getX(n));
    }

    return answer;
}
