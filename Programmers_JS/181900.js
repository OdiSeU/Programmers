function solution(my_string, indices) {
    const check = Array(my_string.length).fill(1);

    indices.forEach((v) => (check[v] = 0));

    return [...my_string].filter((_, i) => check[i]).join("");
}
