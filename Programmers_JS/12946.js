function solution(n) {
    let answer = [];
    const hanoi = (n, from, to, tmp) => {
        if(n > 1) hanoi(n-1, from, tmp, to);
        answer.push([from, to]);
        if(n > 1) hanoi(n-1, tmp, to, from);
    }
    hanoi(n, 1, 3, 2);
    return answer;
}