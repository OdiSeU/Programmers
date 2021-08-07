function solution(citations) {
    let answer = 0, len = citations.length;
    citations.sort((a,b)=>b-a).forEach((v,i) => {
        answer = Math.max(answer, Math.min(len-i, v));
    });
    return answer;
}