function solution(lines) {
    const getFromTo = (t) => {
        let sec = t.slice(24, -1);
        let to = new Date(t.slice(0, 23));
        let from = new Date(to - sec*1000 + 1)
        return [from.getTime(), to.getTime()];
    }
    
    return lines.map(v => getFromTo(v))
        .reduce((ans, v, i, data) => {
        let cnt = 1;
        for(let j = i+1; j < data.length; j++)
            if(data[j][0] - 1000 < v[1])
                cnt++;
        return Math.max(ans, cnt);
    }, 1);
}