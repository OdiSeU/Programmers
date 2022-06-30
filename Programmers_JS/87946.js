function solution(k, dungeons) {
    const check = dungeons.map(_=>0);
    const dfs = (hp, depth) => {
        max_cnt = Math.max(max_cnt, depth);
        dungeons.forEach(([min, cost], i) => {
            if(!check[i] && hp >= min) {
                check[i] = 1;
                dfs(hp-cost, depth+1);
                check[i] = 0;
            }
        });
    }
    let max_cnt = 0;
    dfs(k, 0);
    return max_cnt;
}