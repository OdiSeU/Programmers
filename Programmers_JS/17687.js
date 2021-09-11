function solution(n, t, m, p) {
    let answer = '';
    let s = '', i = 0;
    while(s.length < t * m) s += (i++).toString(n);
    for(i = p-1; answer.length < t; i += m)
        answer += s[i].toUpperCase();
    
    return answer;
}