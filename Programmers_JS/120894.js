// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    const converts = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    Object.entries(converts).forEach((v) => {
        numbers = numbers.replaceAll(...v);
    });

    return +numbers;
}
