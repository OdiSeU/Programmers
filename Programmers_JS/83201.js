function solution(scores) {
    let scoreInfo = Array.from(Array(scores.length), () => Object({ max: 0, min: 100, sum: 0, cnt: 0}));
    scores.forEach((score, i) => {
        score.forEach((n, j) => {
            if(i !== j) {
                scoreInfo[j].max = Math.max(scoreInfo[j].max, n);
                scoreInfo[j].min = Math.min(scoreInfo[j].min, n);
                scoreInfo[j].sum += n;
                scoreInfo[j].cnt++;
            }
        })
    });
    scores.forEach((score, i) => {
        let n = score[i];
        if(scoreInfo[i].min <= n && n <= scoreInfo[i].max) {
            scoreInfo[i].sum += n;
            scoreInfo[i].cnt++;
        }
    });
    return scoreInfo.reduce((acc, obj) => {
        let stdAvgs = [90, 80, 70, 50, 0];
        let grades = ['A', 'B', 'C', 'D', 'F'];
        let avg = obj.sum / obj.cnt;
        for(let i = 0; i < 5; i++) {
            if(avg >= stdAvgs[i]) return acc + grades[i];
        }
    }, '');
}