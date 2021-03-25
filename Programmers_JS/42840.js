function OMR(seq) {
    this.now = 0;
    this.score = 0;
    this.seq = seq;
    this.check = function(ans) {
        this.score += this.seq[this.now++] == ans;
        this.now %= this.seq.length;
    }
}

function solution(answers) {
    let student = [
        new OMR([1,2,3,4,5]),
        new OMR([2,1,2,3,2,4,2,5]),
        new OMR([3,3,1,1,2,2,4,4,5,5])
    ];
    let max = 0, answer = [];
    for(let i = 0; i < answers.length; i++) {
        for(let j = 0; j < 3; j++) {
            student[j].check(answers[i]);
            if(student[j].score > max) max = student[j].score;
        }
    }
    for(let i = 0; i < 3; i++) {
        if(student[i].score == max) answer.push(i+1);
    }
    return answer;
}