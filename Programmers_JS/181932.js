function solution(code) {
    return code
        .split("1")
        .map((v, idx) => [...v].filter((_, i) => idx % 2 === i % 2).join(""))
        .join("");
}
