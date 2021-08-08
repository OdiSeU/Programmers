function solution(citations) {
    let answer = 0, len = citations.length;
    citations.sort((a,b)=>a-b).forEach((v,i) => {
        answer = Math.max(answer, Math.min(len-i, v));
    });
    return answer;
}