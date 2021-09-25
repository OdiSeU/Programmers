function solution(left, right) {
    let memoi = Array.from(Array(right+1), ()=>1);
    let ans = 0;
    
    for(let i = 2; i <= right; i++)
        for(let j = i; j <= right; j+=i)
            memoi[j]++;
    
    for(let i = left; i <= right; i++)
        ans += memoi[i] % 2 ? -i : i;
    
    return ans;
}