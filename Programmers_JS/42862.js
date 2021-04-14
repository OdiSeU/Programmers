function solution(n, lost, reserve) {
    let student = new Set(lost);
    reserve.forEach((i,j) => {
        if(student.has(i)){
            student.delete(i);
            delete reserve[j]
        }
    });
    reserve.sort((a,b)=>a-b).forEach(i => {
        if(student.has(i-1)) student.delete(i-1);
        else if(student.has(i+1)) student.delete(i+1);
    });
    return n - student.size;
}