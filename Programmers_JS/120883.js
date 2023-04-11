// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
    const accounts = new Map(db);
    const [id, pw] = id_pw;
    if (!accounts.has(id)) return "fail";
    if (accounts.get(id) !== pw) return "wrong pw";
    return "login";
}
