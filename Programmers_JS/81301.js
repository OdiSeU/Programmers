function solution(s) {
    const dict = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    let word = '', num = 0;
    for(let i = 0; i < s.length; i++) {
        let n = parseInt(s[i]);
        if(n>=0) num = num * 10 + n;
        else {
            word += s[i];
            if(dict[word]>=0) {
                num = num * 10 + dict[word];
                word = '';
            }
        }
    }
    return num;
}