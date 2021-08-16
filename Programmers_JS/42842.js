function solution(brown, yellow) {
    let answer = [];
    for(let i = 1; i*i <= yellow; i++) {
        if(yellow % i) continue;
        if((yellow/i + 2)*(i+2) === brown + yellow) {
            answer = [yellow/i + 2, i + 2];
            break;
        } 
    }
    return answer;
}