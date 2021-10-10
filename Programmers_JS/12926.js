function solution(s, n) {
    let answer = '', code;
    for(let i = 0; i < s.length; i++) {
        code = s[i].charCodeAt();
        if('a' <= s[i] && s[i] <= 'z')
            code = (code - 97 + n) % 26 + 97;
        else if('A' <= s[i] && s[i] <= 'Z') 
            code = (code - 65 + n) % 26 + 65;
        answer += String.fromCharCode(code);
    }
    return answer;
}