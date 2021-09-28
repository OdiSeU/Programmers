function solution(weights, head2head) {
    const scores = weights.map((weight, idx) => {
        let cntWin = 0, cntHeavy = 0, cntFight = 0;
        let hist = head2head[idx];
        for(let i = 0; i < hist.length; i++) {
            if(hist[i] !== 'N') {
                cntFight++;
                if(hist[i] === 'W') {
                    cntWin++;
                    if(weight < weights[i]) {
                        cntHeavy++;
                    }
                }
            }
        }
        return [cntFight ? cntWin / cntFight : 0, cntHeavy, weight, idx];
    });
    
    return Array.from(Array(weights.length), (_, i)=>i+1)
        .sort((a, b) => {
            [a, b] = [scores[a-1], scores[b-1]];
            if(b[0] !== a[0]) return b[0] - a[0];
            if(b[1] !== a[1]) return b[1] - a[1];
            if(b[2] !== a[2]) return b[2] - a[2];
            return a[3] - b[3];
        });
}