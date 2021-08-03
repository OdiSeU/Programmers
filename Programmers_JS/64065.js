function solution(s) {
    const difference = (a, b) => {
        for(let x of b) a.delete(x);
        return a;
    };
    return s.slice(2,-2).split('},{').map(x => new Set(x.split(',').map(x => parseInt(x))))
        .sort((a,b)=>a.size-b.size).reduce((acc, now)=>[...acc, ...difference(now, new Set(acc))],[]);
}