function solution(n) {
    let answer = '', add = '수박';
    let last = n & 1 ? '수' : '';
    while(n >>= 1) {
        if(n & 1) answer += add;
        add += add;
    }
    return answer + last;
}