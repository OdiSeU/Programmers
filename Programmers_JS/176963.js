// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    const scores = new Map();

    for (let i = 0; i < name.length; i++) {
        scores.set(name[i], yearning[i]);
    }

    const sumOfScores = (arr) =>
        arr.reduce((acc, v) => acc + (scores.get(v) | 0), 0);

    return photo.map(sumOfScores);
}
