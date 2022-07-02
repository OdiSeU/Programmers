function solution(begin, end) {
    const getCount = (n) => {
        let x = Math.sqrt(n);
        for(let i = 2; i <= x; i++) {
            if(n % i === 0 && n / i <= 10000000) {
                return n / i;
            }
        }
        return 1;
    }
    let answer = new Array(end-begin+1);
    for(let i = begin; i <= end; i++) {
        answer[i-begin] = getCount(i);
    }
    if(begin===1) answer[0] = 0;
    return answer;
}