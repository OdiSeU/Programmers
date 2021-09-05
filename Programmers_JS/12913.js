function solution(land) {    
    return Math.max(...land.reduce((acc, v) =>
      [
        v[0] + Math.max(acc[1], acc[2], acc[3]),
        v[1] + Math.max(acc[0], acc[2], acc[3]),
        v[2] + Math.max(acc[0], acc[1], acc[3]),
        v[3] + Math.max(acc[0], acc[1], acc[2])
      ], [0, 0, 0, 0]));
}