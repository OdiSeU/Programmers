function solution(s) {
    const checkBrk = (s) => {
        const dict = { ']':'[', '}':'{', ')':'(' };
        let stack = [];
        for(let i = 0; i < s.length; i++) {
            if(']})'.includes(s[i])) {
                if(stack[stack.length-1] === dict[s[i]]) stack.pop();
                else return 0;
            }
            else stack.push(s[i]);
        }
        return stack.length ? 0 : 1;
    }
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        answer += checkBrk(s);
        s = s.slice(1)+s[0];
    }
    return answer;
}