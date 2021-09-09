function solution(msg) {
    const dict = new Map(Array.from(Array(26), (_, i)=>[String.fromCharCode(65+i), i+1]));
    let word = '', logs =[];
    
    for(let i = 0; i < msg.length; i++) {
        if(dict.has(word+msg[i])) word += msg[i];
        else {
            logs.push(dict.get(word));
            dict.set(word+msg[i], dict.size+1)
            word = msg[i];
        }
    }
    logs.push(dict.get(word));
    return logs;
}