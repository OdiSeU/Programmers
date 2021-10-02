function solution(arr) {
    let [idx, _] = arr.reduce((acc, v, i) => acc[1] < v ? acc : [i, v], [0, arr[0]]);
    arr.splice(idx, 1);
    return arr.length ? arr : [-1];
}