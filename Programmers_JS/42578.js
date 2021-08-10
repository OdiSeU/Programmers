function solution(clothes) {
    const getCombi = (elem, count) => {
        if(count === 1) return elem.map(x=>[x]);
        let result = [];
        elem.forEach((v, idx, elem) => {
            result.push(...getCombi(elem.slice(idx+1), count-1).map(x=>[v, ...x]));
        });
        return result;
    }
    let counts = clothes.reduce((acc, cloth) => {
        acc[cloth[1]] = (acc[cloth[1]] | 0) + 1;
        return acc;
    }, []);
    let answer = 0, cntArr = Object.values(counts);
    for(let i = 1; i <= cntArr.length; i++) {
        answer += getCombi(cntArr, i)
            .reduce((acc, combi) => acc + combi.reduce((acc, v)=>acc * v), 0)
    }
    return answer;
}