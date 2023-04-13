// https://school.programmers.co.kr/learn/courses/30/lessons/161990#

function solution(wallpaper) {
    let [w, h] = [wallpaper[0].length, wallpaper.length];
    const pointX = [];
    const pointY = [];

    for (let x = 0; x < h; x++) {
        for (let y = 0; y < w; y++) {
            if (wallpaper[x][y] === "#") {
                pointX.push(x);
                pointY.push(y);
            }
        }
    }

    return [
        Math.min(...pointX),
        Math.min(...pointY),
        Math.max(...pointX) + 1,
        Math.max(...pointY) + 1,
    ];
}
