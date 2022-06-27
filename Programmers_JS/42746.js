function solution(numbers) {
    let answer = numbers.sort((a,b)=>{
        a += ''; b += '';
        return ((b+a)|0) - ((a+b)|0);
    }).join('');
    return answer[0] == '0' ? '0' : answer;
}