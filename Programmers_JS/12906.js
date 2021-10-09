function solution(arr) {
    let answer = [], now = -1;
    arr.forEach(v => {
        if(v !== now) {
            answer.push(v);
            now = v;
        }
    });
    return answer;
}