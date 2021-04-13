function solution(n) {
    let ans = 0;
    n = n.toString(3);
    for(let i = 0, mult = 1; i < n.length; i++, mult*=3) {
        ans += mult * n[i];
    }
    return ans;
}