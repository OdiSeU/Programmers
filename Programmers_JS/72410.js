function solution(new_id) {
    let tmp = new_id.toLowerCase().replace(/[^\w-_.]/g, '').replace(/\.+/g, '.');
    if(tmp == '.') new_id = '';
    else {
        let from = tmp[0]=='.' ? 1 : 0;
        let to = tmp[tmp.length-1]=='.' ? tmp.length-1 : tmp.length;
        new_id = tmp.substring(from, to);
    }
    if(new_id == "") new_id = 'aaa';
    if(new_id.length > 15) {
        new_id = new_id.substring(0, 15);
        if(new_id[new_id.length-1] == '.') new_id = new_id.substring(0, new_id.length-1);
    }
    while(new_id.length <= 2) new_id += new_id[new_id.length - 1];
    return new_id;
}