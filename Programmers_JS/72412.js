
// function solution(info, query) {
//     const checkQuery = (data, query) => {
//         let checkData = query.every((v, i) => v === '-' || i === 4 || v === data[i]);
//         return checkData && Number(data[4]) - Number(query[4]) >= 0;
//     }
//     let infoTable = info.map(v => v.split(' '));
//     return query.map(v => {
//         let cnt = 0;
//         let qry = v.split(' ').filter(v => v !== 'and');
//         infoTable.forEach(data => {
//            if(checkQuery(data, qry)) cnt++;
//         });
//         return cnt;
//     });
// }

// function solution(info, query) {
//     const checkQuery = (data, query) => {
//         let [dIdx, qIdx] = [data.lastIndexOf(' '), query.lastIndexOf(' ')];
//         let exp = query.slice(0, qIdx).replace(/ and/g, '').replace(/-/g, '.*');
//         return data.slice(0, dIdx).match(RegExp(exp)) && data.slice(dIdx+1) - query.slice(qIdx+1) >= 0;
//     }
//     return query.map(v => info.reduce((acc, data) => checkQuery(data, v) ? acc+1 : acc, 0));
// }

// function solution(info, query) {
//     const checkQuery = (data, query) => {
//         let [dIdx, qIdx] = [data.lastIndexOf(' '), query.lastIndexOf(' ')];
//         let dAbrv = data.slice(0, dIdx).split(' ').map(v => v[0]).join('');
//         let qAbrv = query.slice(0, qIdx).split(' and ')
//             .map(v => v === '-' ? '.' : v[0]).join('');
//         return dAbrv.match(RegExp(qAbrv)) && data.slice(dIdx+1) - query.slice(qIdx+1) >= 0;
//     }
//     return query.map(v => info.reduce((acc, data) => checkQuery(data, v) ? acc+1 : acc, 0));
// }

function solution(info, query) {
    const save = (table, data) => {
        let sliceIdx = data.indexOf(' ');
        let [key, value] = [data.slice(0, sliceIdx), data.slice(sliceIdx+1)];
        if(value.indexOf(' ') >= 0) {
            if(!table[key]) table[key] = {};
            if(!table['-']) table['-'] = {};
            save(table[key], value);
            save(table['-'], value);
        }
        else {
            if(table[key]) table[key].push(value);
            else table[key] = [value];
            if(table['-']) table['-'].push(value);
            else table['-'] = [value];
        }
    }
    let infoTable = info.reduce((acc, v) => { save(acc, v); return acc; }, {});
    return query.map(v => {
        let q = v.split(' ').filter(v=> v !== 'and');
        try { return infoTable[q[0]][q[1]][q[2]][q[3]].reduce((acc , n) => n - q[4] >= 0 ? acc+1 : acc, 0); }
        catch { return 0; }
    });
}