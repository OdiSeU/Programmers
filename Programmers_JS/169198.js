// https://school.programmers.co.kr/learn/courses/30/lessons/169198

function solution(m, n, startX, startY, balls) {
    return balls.map(([x, y]) => {
        const diffX = (startX - x) ** 2;
        const diffY = (startY - y) ** 2;
        const dists = [];

        if (diffX || startY < y) dists.push(diffX + (startY + y) ** 2);
        if (diffX || startY > y) dists.push(diffX + (2 * n - startY - y) ** 2);
        if (diffY || startX < x) dists.push(diffY + (startX + x) ** 2);
        if (diffY || startX > x) dists.push(diffY + (2 * m - startX - x) ** 2);

        return Math.min(...dists);
    });
}
