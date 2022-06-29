function solution(id_list, report, k) {
    let report_to = {};
    let report_by = {};
    let banned_cnt = {};
    for(let x of id_list) {
        report_to[x] = new Set();
        report_by[x] = new Set();
        banned_cnt[x] = 0;
    }
    for(let x of report) {
        let [a, b] = x.split(' ');
        report_to[a].add(b);
        report_by[b].add(a);
    }
    for(let x in report_by) {
        if(report_by[x].size >= k) {
            for(let id of report_by[x])
                banned_cnt[id] += 1;
        }
    }

    return id_list.map(id=>banned_cnt[id]);
}