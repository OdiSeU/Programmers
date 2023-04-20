// https://school.programmers.co.kr/learn/courses/30/lessons/148652

function solution(n, l, r) {
    const cantoer = (x, bit) => {
        if (x === 0) return 0;

        const divider = 5 ** bit;
        const remain = x % divider;
        const share = (x - remain) / divider;

        return (
            "012234"[share] * 4 ** bit +
            (share !== 2 && cantoer(remain, bit - 1))
        );
    };

    return cantoer(r, n) - cantoer(l - 1, n);
}
