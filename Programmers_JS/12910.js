function solution(arr, divisor) {
    let ans = arr.filter(v => v % divisor === 0).sort((a,b)=>a-b);
    return ans.length ? ans : [-1];
}