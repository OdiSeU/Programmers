function solution(m, musicinfos) {
    const t2m = (t) => Number(t.slice(0,2)) * 60 + Number(t.slice(3));
    const cnvtMusic = (m) => m.replace(/.#/g, (v) => v[0].charCodeAt() - 65);
    const getWholeMusic = (time, music) => {
        let result = '', len = music.length;
        for(let t = time; t > 0; t -= len) {
            result += t < len ? music.slice(0, t) : music;
        }
        return result;
    }
    
    let answer = { time: 0, title: '(None)' };
    let cnvtM = cnvtMusic(m);
    
    musicinfos.forEach(v => {
        let [from, to, title, song] = v.split(',');
        let time = t2m(to) - t2m(from);
        let music = getWholeMusic(time, cnvtMusic(song));
        if(music.search(cnvtM) >= 0 && answer.time < time) {
            answer = { time: time, title: title };
        }
    })
    
    return answer.title;
}