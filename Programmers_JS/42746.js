function solution(numbers) {
    let answer = numbers.sort((a,b)=>{
        a += ''; b += '';
        let [x, y] = [a.padEnd(4, a[0]), b.padEnd(4, b[0])];
        // console.log(a, b);
        // console.log(x, y, x==y, x == y ? b.length - a.length : x < y ? 1 : -1);
        return x == y ? a.length - b.length : x < y ? 1 : -1;
    }).join('');
    return answer[0] == '0' ? '0' : answer;
}