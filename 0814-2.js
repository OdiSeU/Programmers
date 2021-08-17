function solution(header) {
    let data = header.split('\n').map(v => v.split(': '));
    let cookies = data.filter(v => v[0]==='Set-Cookie');
    return cookies.map(v => {
        let equalIdx = v[1].indexOf('='), tmpObj = {};
        tmpObj[v[1].slice(0, equalIdx).trim()] = v[1].slice(equalIdx+1).trim()
        return tmpObj;
    });
}