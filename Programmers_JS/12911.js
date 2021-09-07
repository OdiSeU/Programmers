function solution(n) {
    const getOne = n => n.toString(2).match(/1/g).length;
    let x = getOne(n);
    while(n++) if(x === getOne(n)) return n;
}