function Command(size, now) {
    let table = [{up: null, down: null, value: 'O'}];
    for(let i = 1; i < size; i++) {
        table.push({up: table[i-1], down: null, value: 'O'});
        table[i-1].down = table[i];
    }
    let cursor = table[now];
    let trash = [];

    this.up = function(n) {
        while(n--) cursor = cursor.up;
    };
    this.down = function(n) {
        while(n--) cursor = cursor.down;
    };
    this.delete = function() {
        trash.push(cursor);
        cursor.value = 'X';
        if(cursor.up) cursor.up.down = cursor.down;
        if(cursor.down) {
            cursor.down.up = cursor.up;
            cursor = cursor.down;
        }
        else cursor = cursor.up;
    }
    this.restore = function() {
        let node = trash.pop();
        node.value = 'O';
        if(node.up) node.up.down = node;
        if(node.down) node.down.up = node;
    }
    this.toString = function() {
        return table.reduce((acc, v) => acc + v.value, '');
    }
}


function solution(n, k, cmd) {
    let command = new Command(n, k);
    cmd.forEach(i => {
        let c = i.split(' ');
        switch(c[0]) {
            case 'U': command.up(c[1]); break;
            case 'D': command.down(c[1]); break;
            case 'C': command.delete(); break;
            case 'Z': command.restore(); break;
        }
    })
    return command.toString();
}