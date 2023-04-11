// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
    const discount = (price) => {
        if (price >= 500_000) return price * 0.8;
        if (price >= 300_000) return price * 0.9;
        if (price >= 100_000) return price * 0.95;
        return price;
    };
    return Math.floor(discount(price));
}
