function solution(nums) {
    let sums = [], max = 0, seive;
    
    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            for(let k = j + 1; k < nums.length; k++) {
                sum += nums[k];
                max = Math.max(max, sum);
                sums.push(sum);
                sum -= nums[k];
            }
            sum -= nums[j];
        }
    }
    
    seive = Array.from(Array(max + 1),()=>true);
    seive[0] = seive[1] = false;
    for(let i = 2; i * i <= max; i++) {
        if(seive[i]) {
            for(let j = i * i; j <= max; j += i){
                seive[j] = false;
            }
        }
    }
    
    return [...sums].filter(v => seive[v]).length;
}