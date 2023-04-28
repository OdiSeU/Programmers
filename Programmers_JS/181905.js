function solution(my_string, s, e) {
    const head = my_string.slice(0, s);
    const body = my_string.slice(s, e + 1);
    const tail = my_string.slice(e + 1);
    return head + [...body].reverse().join("") + tail;
}
