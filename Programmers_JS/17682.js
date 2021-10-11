function solution(dartResult) {
    let score = [0], tmp = '';
    let rules = { 'S': 1, 'D': 2, 'T': 3 };
    
    for(let i = 0; i < dartResult.length; tmp = '') {
        while(!isNaN(dartResult[i]-0)) tmp += dartResult[i++];
        score.push(Math.pow(tmp, rules[dartResult[i++]]));
        if(dartResult[i] === '*') {
            score[score.length-1] *= 2;
            score[score.length-2] *= 2;
            i++;
        }
        if(dartResult[i] === '#') {
            score[score.length-1] *= -1;
            i++;
        }
    }
    return score.reduce((acc, v)=> acc + v);
}