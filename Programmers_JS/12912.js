function solution(a, b) {
    return ((a + b) * (a < b ? b - a + 1: a - b + 1)) / 2;
}