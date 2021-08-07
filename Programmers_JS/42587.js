function solution(priorities, location) {
    let counts = new Array(10).fill(0);
    priorities.forEach(v => counts[v]++);

    const toIndex = (i) => (i + priorities.length) % priorities.length;
    const getLastIndex = (priority, nowIndex) => {
        if(priority < 9) nowIndex = getLastIndex(priority+1, nowIndex);
        let idx = toIndex(nowIndex-1);
        if(counts[priority]) {
            while(idx != nowIndex) {
                if(priorities[idx] === priority) break;
                idx = toIndex(idx-1);
            }
        }
        return toIndex(idx+1);
    };
    let tgPrior = priorities[location], answer = 1;
    let idx = getLastIndex(tgPrior+1, 0);
    for(let i = tgPrior+1; i<10; i++) answer += counts[i];
    while(idx != location) {
        if(priorities[idx] === tgPrior) answer++;
        idx = toIndex(idx+1);
    }
    return answer;
}