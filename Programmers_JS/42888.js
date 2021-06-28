const users = {};

function executeCmd(record) {
    let cmd = record.split(' ');
    if(cmd[0] !== 'Leave') users[cmd[1]] = cmd[2];
}

function getLog(record) {
    let cmd = record.split(' ');
    switch(cmd[0]) {
        case 'Enter': return `${users[cmd[1]]}님이 들어왔습니다.`;
        case 'Leave': return `${users[cmd[1]]}님이 나갔습니다.`;
    }
}

function solution(records) {
    let logs = [];
    records.forEach(rec=>executeCmd(rec));
    records.forEach(rec=>{
        let log = getLog(rec);
        if(log) logs.push(log);
    });
    return logs;
}