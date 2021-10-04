function solution(sizes) {
    let a = 0, b = 0;
    for(let i = 0; i < sizes.length; i++) {
        let [w, h] = [Math.max(...sizes[i]), Math.min(...sizes[i])];
        [a, b] = [Math.max(a, w), Math.max(b, h)];
    }
    return a * b;
}