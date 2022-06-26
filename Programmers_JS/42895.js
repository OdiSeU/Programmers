function solution(N, number) {
    const memoi = Array.from(Array(8), () => []);
    const dict = new Set(memoi.flat());
    const calc = (a, b) => new Set([a+b, a-b, b-a, a*b, a/b, b/a]);
    const combi = n => Array.from(Array((n+1)/2|0), (_, i) => [i, n-i-1])
    
    if(N === number) return 1;
    memoi[0] = [N];
    for(let i = 1; i < 8; i++) {
        memoi[i] = [`${N}`.repeat(i+1)|0];
        if(memoi[i][0] === number) return i+1;
        for(let [x, y] of combi(i)) {
            for(let a of memoi[x]) {
                for(let b of memoi[y]) {
                    for(let c of [...calc(a, b)].filter(v => !dict.has(v))) {
                        if(c === number) return i+1;
                        memoi[i].push(c);
                        dict.add(c);
                    }
                }
            }
        }
    }

    return -1;
}