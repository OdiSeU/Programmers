// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    const counts = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) counts[survey[i][0]] += 4 - choices[i];
        else counts[survey[i][1]] += choices[i] - 4;
    }

    const cmpType = (a, b) => {
        if (counts[a] === counts[b]) return a < b ? a : b;
        return counts[a] > counts[b] ? a : b;
    };

    const types = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"],
    ];

    return types.map(([a, b]) => cmpType(a, b)).join("");
}
