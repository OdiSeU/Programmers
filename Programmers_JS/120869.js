// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
    const isOnceUsed = (str, char) =>
        str.includes(char) && str.indexOf(char) === str.lastIndexOf(char);

    return dic.some((str) => spell.every((char) => isOnceUsed(str, char)))
        ? 1
        : 2;
}
