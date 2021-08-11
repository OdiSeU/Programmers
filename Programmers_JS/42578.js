function solution(clothes) {
    let counts = clothes.reduce((acc, cloth) => {
        acc[cloth[1]] = (acc[cloth[1]] | 0) + 1;
        return acc;
    }, []);
    return Object.values(counts).reduce((acc, cnt) => acc * (cnt + 1), 1) - 1;
}