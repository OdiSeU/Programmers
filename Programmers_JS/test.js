function solution(n, k) {
    const modA = n % k;
    const modB = 10 ** `${n}`.length;

    let x = modA;
    let count = 1;

    const memoi = new Set([x]);

    while (x) {
        x = (x * modB + modA) % k;
        if (memoi.has(x)) return -1;
        memoi.add(x);
        count++;
    }

    return count;
}
