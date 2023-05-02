function solution(my_string) {
    const uppers = Array(26).fill(0);
    const lowers = Array(26).fill(0);
    const ASCII_A = "A".charCodeAt();
    const ASCII_a = "a".charCodeAt();

    for (c of my_string) {
        const ascii = c.charCodeAt();
        if ("a" <= c && c <= "z") {
            lowers[ascii - ASCII_a]++;
        } else {
            uppers[ascii - ASCII_A]++;
        }
    }

    return [...uppers, ...lowers];
}
