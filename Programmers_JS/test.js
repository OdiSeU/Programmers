function solution(s) {
    let ans = 0;
    for(let i = 0; i < s.length; i++) {
        let a = 0, b = 0, c =0;
        for(let j = 0; j < s.length; j++) {
            switch(s[j]) {
                case '(': a++; break;
                case '{': b++; break;
                case '[': c++; break;
                case ')': a--; break;
                case '}': b--; break;
                case ']': c--; break;
            }
            if(a < 0|| b < 0 || c < 0) break;
        }
        if(!(a|b|c)) ans++;
        s = s.slice(1) + s[0];
    }
    return ans;
}