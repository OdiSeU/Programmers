function solution(n, words) {
    const history = new Set([words[0]]);
    let ans = [0, 0];
    if(words[0].length < 2) return [1, 1];
    for(let i = 1; i < words.length; i++) {
        if(words[i] < 2 ||
           words[i-1].slice(-1) !== words[i][0] ||
           history.has(words[i])) {
            ans = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        }
        history.add(words[i]);
    }
    return ans;
}