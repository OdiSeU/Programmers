// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
    const getOX = (cmd) => {
        const [left, right] = cmd.split(" = ");
        return eval(left) === +right ? "O" : "X";
    };

    return quiz.map(getOX);
}
