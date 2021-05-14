function solution(numbers) {
    return numbers.map(n => {
        let bit = 1;
        while(bit & n) bit <<= 1;
        if(bit > n) n ^= (bit >> 1);
        return n | bit;
    });
}