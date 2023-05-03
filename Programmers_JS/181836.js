// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
    const [rows, cols] = [picture.length * k, picture[0].length * k];
    const result = [];

    for (let r = 0; r < rows; r++) {
        const temp = Array(cols);
        for (let c = 0; c < cols; c++) {
            temp[c] = picture[(r / k) | 0][(c / k) | 0];
        }
        result.push(temp.join(""));
    }

    return result;
}
