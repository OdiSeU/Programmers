// https://school.programmers.co.kr/learn/courses/30/lessons/181837

/**
 *
 * @param {string[]} order
 * @returns
 */
function solution(order) {
    const getCost = (menu) => {
        if (menu.includes('americano')) return 4500;
        if (menu.includes('cafelatte')) return 5000;
        return 4500;
    };

    return order.map(getCost).reduce((acc, v) => acc + v, 0);
}
