function solution(word) {
    let answer = word.length, mult = 781;
    let dict = {'A':0, 'E':1, 'I':2, 'O':3, 'U':4};
    for(let c of word) {
        answer += dict[c] * mult;
        mult = (mult - 1) / 5;
    }
    return answer;
}