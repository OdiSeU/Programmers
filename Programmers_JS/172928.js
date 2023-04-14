// https://school.programmers.co.kr/learn/courses/30/lessons/172928

const vectors = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
};

function solution(park, routes) {
    const [rows, cols] = [park.length, park[0].length];

    const isOutOfArea = (r, c) => {
        if (r < 0 || rows <= r) return true;
        if (c < 0 || cols <= c) return true;
        return false;
    };
    const isBlocker = (r, c) => park[r][c] === "X";

    const startIdx = park.join("").indexOf("S");
    let [nowR, nowC] = [Math.floor(startIdx / rows), startIdx % cols];

    routes.forEach((cmd) => {
        const [drct, dist] = cmd.split(" ");
        const [vectorR, vectorC] = vectors[drct];

        for (let i = 1; i <= dist; i++) {
            const [nextR, nextC] = [nowR + vectorR * i, nowC + vectorC * i];

            if (isOutOfArea(nextR, nextC) || isBlocker(nextR, nextC)) {
                return;
            }
        }
        [nowR, nowC] = [nowR + vectorR * dist, nowC + vectorC * dist];
    });

    return [nowR, nowC];
}
