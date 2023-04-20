// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
    const answer = [[5]];

    for (let i = 0; answer[i][0] < r; i++) {
        const temp = [];
        for (let x of answer[i]) {
            temp.push(x * 10);
            temp.push(x * 10 + 5);
        }
        answer.push(temp);
    }

    const filtered = answer.flat().filter((v) => l <= v && v <= r);

    return filtered.length ? filtered : [-1];
}
