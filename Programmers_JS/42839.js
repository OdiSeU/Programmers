function solution(numbers) {
    const pickNums = (numArr, count) => {
        if(count === 1) return new Set(numArr.slice());
        let result = [];
        numArr.forEach((v, idx, numArr) => {
            let nums = pickNums(numArr.filter((_, i) => idx !== i), count-1);
            result.push(...nums, ...[...nums].map(x => x*10 + v));
        });
        return new Set(result);
    }
    const getPrime = (endNum) => {
        let seive = new Array(endNum+1).fill(true);
        seive[0] = seive[1] = false;
        for(let i = 2; i*i<=endNum; i++) {
            if(seive[i]) {
                for(let j = i*i; j<=endNum; j+=i) seive[j] = false;
            }
        }
        return seive;
    }
    let primes = getPrime(10**numbers.length-1);
    let nums = pickNums([...numbers].map(x=>Number(x)), numbers.length);
    return answer;
}