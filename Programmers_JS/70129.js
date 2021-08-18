function solution(s) {
    let ans = [0, 0], one;
    while(s.length > 1) {
        one = s.match(/1/g).length;
        ans = [ans[0] + 1, ans[1] + s.length - one];
        s = one.toString(2);
    }
    return ans;
}