function solution(arr) {
    const getGCD = (a, b) => b ? getGCD(b, a % b) : a;
    return arr.reduce((lcm, v) => lcm * v / getGCD(lcm, v), arr[0]);
}