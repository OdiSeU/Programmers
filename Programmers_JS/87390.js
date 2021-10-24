function solution(n, left, right) {
    let answer = [];
    
    for(let i = left; i <= right; i++) {
        let [r, c] = [i / n | 0, i % n];
        answer.push(r < c ? c + 1 : r + 1);
    }
    
    return answer;
}