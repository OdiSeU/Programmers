// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    const getDateAfter = (date, month) => {
        const [y, m, d] = date.split(".").map((v) => +v);
        return new Date(y, m + month - 1, d);
    };

    const termMap = new Map(terms.map((v) => v.split(" ")));
    const todate = new Date(today);
    const result = [];

    privacies.forEach((v, i) => {
        const [date, type] = v.split(" ");
        if (getDateAfter(date, +termMap.get(type)) <= todate) {
            result.push(i + 1);
        }
    });

    return result;
}
