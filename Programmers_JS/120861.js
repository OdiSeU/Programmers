// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
    let [r, c] = [0, 0];
    const [w, h] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    const isValidCoord = (r, c) => {
        if (r < -w || w < r) return false;
        if (c < -h || h < c) return false;
        return true;
    };

    keyinput.forEach((v) => {
        switch (v) {
            case "left":
                if (isValidCoord(r - 1, c)) r--;
                break;
            case "right":
                if (isValidCoord(r + 1, c)) r++;
                break;
            case "up":
                if (isValidCoord(r, c + 1)) c++;
                break;
            case "down":
                if (isValidCoord(r, c - 1)) c--;
                break;
        }
    });

    return [r, c];
}
