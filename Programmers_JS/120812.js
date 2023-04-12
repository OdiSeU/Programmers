// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
    const counts = array.reduce(
        (acc, v) => acc.set(v, (acc.get(v) | 0) + 1),
        new Map()
    );
    const values = [...counts.values()];
    const max = Math.max(...values);
    const maxIndex = values.indexOf(max);

    return maxIndex === values.lastIndexOf(max)
        ? [...counts.keys()][maxIndex]
        : -1;
}
