function Command(size, cursor) {
    this.table = Array.from({length:size},()=>'O');
    this.cursor = cursor;
    this.trash = [];
    this.up = function(n) {
        while(n) {
            if(this.table[--this.cursor] == 'O') n--;
        }
    };
    this.down = function(n) {
        for(let i=this.cursor+1; i<this.table.length; i++) {
            if(this.table[i] == 'O') n--;
            if(n <= 0) {
                this.cursor = i;
                break;
            }
        }
        return n ? false : true;
    };
    this.delete = function() {
        this.table[this.cursor] = 'X';
        this.trash.push(this.cursor);
        if(!this.down(1)) this.up(1);
    }
    this.restore = function() {
        let n = this.trash.pop();
        this.table[n] = 'O';
    }
    this.toString = function() {
        return this.table.join('');
    }
}


function solution(n, k, cmd) {
    let answer = '';
    let command = new Command(n, k);
    cmd.forEach(i => {
        let c = i.split(' ');
        switch(c[0]) {
            case 'U': command.up(parseInt(c[1])); break;
            case 'D': command.down(parseInt(c[1])); break;
            case 'C': command.delete(); break;
            case 'Z': command.restore(); break;
        }
    })
    return command.toString();
}