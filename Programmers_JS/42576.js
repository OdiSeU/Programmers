// 1
function solution(participant, completion) {
    let dict = {}, ans = '', name;
    for(let i=0; i<participant.length; i++) {
        name = participant[i];
        if(dict[name]) dict[name]++;
        else dict[name] = 1;
    }
    for(let i=0; i<completion.length; i++) {
        name = completion[i];
        if(dict[name]) dict[name]--;
        if(!dict[name]) delete dict[name];
    }
    for(let i in dict) ans = i;
    return ans;
}
// // 2
// function solution(participant, completion) {
//     let i = 0;
//     participant.sort();
//     completion.sort();
//     while(participant[i]==completion[i]) i++;
//     return participant[i];
// }
// 3
// function solution(participant, completion) {
//     let dict = new Map(), ans = '';
//     for(let i=0; i<participant.length; i++) {
//         let p = participant[i], c = completion[i];
//         dict.set(p, (dict.get(p)|0) + 1);
//         dict.set(c, (dict.get(c)|0) - 1);
//     }
//     dict.forEach((v,k)=>{if(v>0) ans = k});
//     return ans;
// }