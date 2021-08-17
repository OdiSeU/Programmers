function solution(mathQuiz) {
    const quiz = mathQuiz();
    return eval(quiz.slice(0,-1));
}