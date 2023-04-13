// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    const alpha = Array.from(Array(26), (_, i) =>
        String.fromCharCode(97 + i)
    ).join("");
    const regex = new RegExp([...skip].join("|"), "g");
    const order = alpha.replace(regex, "");

    return [...s]
        .map((v) => {
            const next = order.indexOf(v) + index;
            return order[next % order.length];
        })
        .join("");
}
