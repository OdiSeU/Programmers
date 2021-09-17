function solution(n, times) {
    let left = 0, right = Math.max(...times) * n;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let cnt = times.reduce((acc, t) => acc + Math.floor(mid / t), 0);
        if(cnt < n) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
}


// function solution(n, times) {
//     times.sort((a,b) => a-b);
//     let left = 0, right = times[times.length - 1] * n;
    
//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let cnt = 0;
//         for(let i = 0; i < times.length && cnt < n; i++)
//             cnt += Math.floor(mid / times[i]);
//         if(cnt < n) left = mid + 1;
//         else right = mid - 1;
//     }
    
//     return left;
// }