function solution(dirs) {
    const getNextPos = (pos, cmd) => {
        let [x, y] = pos;
        switch(cmd) {
            case 'U': y += 1; break;
            case 'L': x -= 1; break;
            case 'D': y -= 1; break;
            case 'R': x += 1; break;
        }
        if(-5 <= x&&x <= 5 && -5 <= y&&y <= 5) return [x, y];
        else return pos;
    }
    const toMem = (now, next) => `${Math.min(now[0], next[0])}${Math.min(now[1], next[1])}${now[0]-next[0]?0:1}`
    let now = [0, 0], next, mems = new Set();
    for(let i = 0; i < dirs.length; i++) {
        next = getNextPos(now, dirs[i]);
        if(now != next) {
            mems.add(toMem(now, next));
            now = next;
        }
    }
    return mems.size;
}