function solution(relation) {
    const isCandiKey = (Idxes) => {
        let colSet = new Set();
        relation.forEach(row => {
            colSet.add(Idxes.reduce((acc, idx) => acc+' '+row[idx], ''));
        });
        return colSet.size === relation.length;
    };
    const getCombi = (elem, count) => {
        if(count === 1) return elem.map(x=>[x]);
        let result = [];
        elem.forEach((v, idx, elem) => {
            result.push(...getCombi(elem.slice(idx+1), count-1).map(x=>[v, ...x]));
        });
        return result;
    }
    let cnt = 0, cols = relation[0].length;
    let check = new Array(cols).fill(true);
    for(let i = 1; i <= cols; i++) {
        let idxes = check.reduce((acc, v, i) => v ? [...acc, i] : acc, []);
        if(idxes.length < i) break;
        getCombi(idxes, i).forEach(v => {
            if(isCandiKey(v)) {
                cnt++;
                v.forEach(i => { check[i] = false });
            }
        });
    }
    return cnt;
}