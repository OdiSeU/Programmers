function solution(line) {
    const getCrossPt = (f1, f2) => {
        [a, b, e] = f1;
        [c, d, f] = f2;
        let z = a*d - b*c;
        if(z === 0) throw new Error('두 직선이 평행 또는 일치');

        let x = (b*f - e*d) / z;
        let y = (e*c - a*f) / z;
        if(!Number.isInteger(x) || !Number.isInteger(y))
            throw new Error('교점이 정수가 아님');
        
        return [x, y];
    }

    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    let stars = [];

    for(let i = 0; i < line.length-1; i++) {
        for(let j = i+1; j < line.length; j++) {
            try {
                let [x, y] = getCrossPt(line[i], line[j]);
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
                stars.push([x,y]);
            } catch {}
        }
    }

    let answer = Array.from(Array(maxY-minY+1), ()=> Array(maxX-minX+1).fill('.'));
    for(let [x, y] of stars) {
        console.log(x, y, -y+minY, x-minX);
        //answer[-y+minY][x-minX] = '*';
    }

    return answer.map(v => v.join(''));
}