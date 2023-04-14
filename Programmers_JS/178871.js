// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
    const orderSet = new Map();
    const playerSet = new Map();

    for (let i = 0; i < players.length; i++) {
        orderSet.set(i, players[i]);
        playerSet.set(players[i], i);
    }

    for (let player of callings) {
        const order = playerSet.get(player);
        const nextPlayer = orderSet.get(order - 1);
        playerSet.set(player, order - 1);
        playerSet.set(nextPlayer, order);
        orderSet.set(order - 1, player);
        orderSet.set(order, nextPlayer);
    }

    return orderSet.values();
}
