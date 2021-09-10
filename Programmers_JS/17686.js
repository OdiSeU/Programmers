function solution(files) {
    const findNumIdx = (f) => {
        let from = f.search(/[0-9]/), to;
        for(to = from; to < f.length; to++)
            if(f[to] < '0' && '9' < f[to]) break;
        return [from, to];
    }
    const parse = (f) => {
        let [from, to] = findNumIdx(f);
        return {
            'head': f.slice(0, from).toUpperCase(),
            'number': parseInt(f.slice(from, to)),
        };
    }
    files.sort((a, b) => {
        let pa = parse(a), pb = parse(b);
        if(pa.head === pb.head) return pa.number - pb.number;
        else return pa.head < pb.head ? -1 : 1;
    })
    return files;
}