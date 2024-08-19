// https://school.programmers.co.kr/learn/courses/30/lessons/181932

/**
 * 풀이 1
 * @param {string} code
 * @returns
 */
function solution(code) {
    let mode = 0;
    let ret = [];

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = mode ? 0 : 1;
            continue;
        }
        if (i % 2 === mode) {
            ret.push(code[i]);
        }
    }

    return ret.length ? ret.join('') : 'EMPTY';
}

/**
 * 풀이 2
 * @param {string} code
 * @returns
 */
function solution(code) {
    return (
        [...code]
            .filter((v) => v !== '1')
            .filter((_, i) => !(i % 2))
            .join('') || 'EMPTY'
    );
}
