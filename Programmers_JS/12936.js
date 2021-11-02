function solution(n, k) {
    let answer = [];
    let nums = Array.from(Array(n), (_, i)=>i+1);
    let fact = n => n > 1 ? fact(n - 1) * n : 1;
    
    k--;
    for(let i = n-1, x = fact(n-1); i >= 0; x /= i--) {
        let idx = k / x | 0;
        k %= x;
        answer.push(nums[idx]);
        nums.splice(idx, 1);
    }
    
    return answer;
}