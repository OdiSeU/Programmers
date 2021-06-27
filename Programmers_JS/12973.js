function solution(s)
{
    let stack = [], len = 0;
    for(let i = 0; i < s.length; i++) {
        if(stack[len-1] === s[i]) len--;
        else stack[len++] = s[i];
    }
    return len ? 0 : 1;
}