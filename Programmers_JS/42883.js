function solution(number, k) {
    let nums = [], len = number.length;
    for(let i = 0; i < len; i++) {
        while(k && nums.length && nums.slice(-1) < number[i]) {
            nums.pop();
            k--;
        }
        nums.push(number[i]);
    }
    return nums.join('').slice(0,len-k);
}