// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
    return queries.reduce((acc, [a, b]) => {
        const head = acc.slice(0, a);
        const body = acc.slice(a, b + 1);
        const tail = acc.slice(b + 1);

        return head + [...body].reverse().join("") + tail;
    }, my_string);
}
