// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
    const getSlope = (dot1, dot2) => (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    const isSameSlope = (x1, x2, y1, y2) =>
        getSlope(x1, x2) === getSlope(y1, y2);
    const [a, b, c, d] = dots;
    if (isSameSlope(a, b, c, d)) return 1;
    if (isSameSlope(a, c, b, d)) return 1;
    if (isSameSlope(a, d, b, c)) return 1;
    return 0;
}
