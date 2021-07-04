Array.prototype.size = function(){ return this.length - this.index; }
Array.prototype.shift = function(){ return this[this.index++]; }

function solution(maps) {
    let row = maps.length, col = maps[0].length;
    let q = [[0,0,1]], move = -1;
    q.index = 0;
    maps[0][0] = 0;
    while(q.size()) {
        let [r, c, m] = q.shift();
        if(r === row-1 && c === col-1) {
            move = m;
            break;
        }
        for(let [i,j] of [[-1,0],[0,-1],[1,0],[0,1]]) {
            i += r; j += c;
            if(0<=i&&i<row&&0<=j&&j<col) {
                if(maps[i][j]) {
                    maps[i][j] = 0;
                    q.push([i,j,m+1]);
                }
            }
        }
    }
    return move;
}