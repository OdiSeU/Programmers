// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    const countChars = (str) =>
        [...str].reduce((acc, v) => {
            return { ...acc, [v]: (acc[v] | 0) + 1 };
        }, {});
    const compare = (obj1, obj2) => {
        return obj1.key;
    };
    const toJSON = (obj) => JSON.stringify(Object.entries(obj).sort());

    const countBefore = countChars(before);
    const countAfter = countChars(after);

    return toJSON(countBefore) === toJSON(countAfter) ? 1 : 0;
}
