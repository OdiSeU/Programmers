// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
    let result = 0;

    while (section.length) {
        const pos = section.pop();
        while (section.at(-1) > pos - m) section.pop();
        if (pos) result++;
    }

    return result;
}
