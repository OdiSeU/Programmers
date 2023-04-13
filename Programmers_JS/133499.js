// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
    const filterDouble = babbling.filter(
        (v) => !/(ayaaya|yeye|woowoo|mama)+/.test(v)
    );
    return filterDouble.filter((v) => /^(aya|ye|woo|ma)+$/.test(v)).length;
}
