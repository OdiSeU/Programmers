function solution(s) {
    return s.split(' ').reduce((acc , v) =>
        [Math.min(acc[0], v), Math.max(acc[1], v)]
        , [Infinity, -Infinity]).join(' ');
}