// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
    const counts = {};

    keymap.forEach((key) => {
        for (let click = 1; click <= key.length; click++) {
            const char = key[click - 1];
            const savedCount = counts[char] || 999_999_999;
            counts[char] = Math.min(savedCount, click);
        }
    });

    return targets.map((key) => {
        let sum = 0;

        for (let char of key) {
            const click = counts[char];
            if (!click) return -1;
            sum += click;
        }

        return sum;
    });
}
