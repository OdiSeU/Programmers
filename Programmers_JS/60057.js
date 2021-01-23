function solution(s) {
    var answer = 1024;
    for(var i=1; i<=Math.floor(s.length/2)+1; i++) {
        var cnt = 0, idx = 0, zip = "", tmp = "";
        for(var j=0; j<s.length;j+=i) {
            var str = s.slice(j,j+i)
            if(tmp === str) cnt++;
            else {
                if(cnt > 1) zip += cnt;
                zip += tmp;
                tmp = str;
                cnt = 1;
            }
        }
        if(cnt > 1) zip += cnt;
        zip += tmp;
        if(answer > zip.length) answer = zip.length;
    }
    
    return answer;
}