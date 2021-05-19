function solution(s){
    let cntP = 0, cntY = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'p' || s[i] == 'P') cntP++;
        else if(s[i] == 'y' || s[i] == 'Y') cntY++;
    }
    return cntP == cntY;
}