function solution(absolutes, signs) {
    return absolutes.reduce(
        (sum, num, idx) => sum + num *(signs[idx] * 2 - 1), 0
    );
}