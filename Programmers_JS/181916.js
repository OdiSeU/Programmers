function solution(a, b, c, d) {
    const [n0, n1, n2, n3] = [a, b, c, d].sort((a, b) => a - b);

    if (n0 === n3) return 1111 * n0;
    if (n0 === n2 || n1 === n3) return (n2 * 10 + (n0 + n3 - n2)) ** 2;
    if (n0 === n1 && n2 === n3) return (n2 + n0) * (n2 - n0);
    if (n0 === n1) return n2 * n3;
    if (n1 === n2) return n0 * n3;
    if (n2 === n3) return n0 * n1;

    return n0;
}
