function solution(n, arr1, arr2) {
    let answer = [], code;
    for(let i=0; i<n; i++) {
        code = (arr1[i] | arr2[i]).toString(2);
        answer.push(code.replaceAll('1','#').replaceAll('0',' '));
    }
    return answer;
}