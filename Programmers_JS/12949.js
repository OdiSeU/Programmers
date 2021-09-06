function solution(arr1, arr2) {
    const mult = (a, b) => a.reduce((acc, v, i) => acc + v * b[i], 0);
    const pivot = (arr) => {
        let tmp = Array.from(Array(arr[0].length), ()=>Array(arr.length));
        for(let i = 0; i < tmp.length; i++)
            for(let j = 0; j < tmp[i].length; j++)
                tmp[i][j] = arr[j][i];
        return tmp;
    }
    const arr3 = pivot(arr2);
    
    return arr1.map(v1 => arr3.map(v2 => mult(v2, v1)));
}