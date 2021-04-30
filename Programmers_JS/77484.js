function solution(lottos, win_nums) {
    let cnt0 = 0, cntAns = 0;
    let getRank = (score) => score > 1 ? 7-score : 6;
    lottos.forEach(v=>{
        if(v == 0) cnt0++;
        else if(win_nums.includes(v)) cntAns++;
    });
    return [getRank(cnt0+cntAns), getRank(cntAns)];
}