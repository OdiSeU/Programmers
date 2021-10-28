function solution(str1, str2) {
    const isAlpha = (c) => 'A' <= c && c <= 'Z';
    const divide = (str) => {
        let arr = [];
        str = str.toUpperCase();
        for(let i = 0; i < str.length - 1; i++)
            if(isAlpha(str[i]) && isAlpha(str[i+1]))
                arr.push(str[i]+str[i+1]);
        return arr.sort((a,b)=>a>b?1:-1);
    }
    let [div1, div2] = [divide(str1), divide(str2)];
    let i = div1.length - 1, j = div2.length - 1, cnt = 0;
    
    if(j < 0) return 65536;
    while(i > -1 && j > -1) {
        if(div1[i] === div2[j]) {
            cnt++;
            i--; j--;
        }
        else div1[i] > div2[j] ? i-- : j--;
    }
    return 65536 * cnt / (div1.length + div2.length - cnt) | 0;
}