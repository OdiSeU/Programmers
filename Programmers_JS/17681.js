function solution(n, arr1, arr2) {
    let answer = [], code;
    for(let i=0; i<n; i++) {
        code = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
        answer.push(code.replace(/1/g,'#').replace(/0/g,' '));
    }
    return answer;
}