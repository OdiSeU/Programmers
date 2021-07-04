function solution(progresses, speeds) {
    let answer = [], day = 0;
    progresses.forEach((progress, i)=>{
        let now = progress + day * speeds[i];
        if(now >= 100) answer[answer.length-1]++;
        else {
            day += Math.ceil((100-now)/speeds[i]);
            answer.push(1);
        }
    })
    return answer;
}