function solution(n) {
    let triArr = Array.from(Array(n), (_,i) => Array(i+1));
    for(let r = -1, c = 0, x = 1; n > 0; n -= 3) {
        for(let i = 0; i < n; i++) triArr[++r][c] = x++;
        for(let i = 1; i < n; i++) triArr[r][++c] = x++;
        for(let i = 2; i < n; i++) triArr[--r][--c] = x++;
    }
    return triArr.flatMap(v=>v);
}