// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
    const check = (discList) => {
        for (let i = 0; i < want.length; i++) {
            if ((discList[want[i]] | 0) < number[i]) {
                return 0;
            }
        }
        return 1;
    };

    const initDiscountList = () => {
        const discList = {};

        for (let i = 0; i < 10; i++) {
            const thing = discount[i];
            discList[thing] = (discList[thing] | 0) + 1;
        }

        return discList;
    };

    const discList = initDiscountList();
    let count = check(discList);

    for (let i = 10; i < discount.length; i++) {
        const [subThing, addThing] = [discount[i - 10], discount[i]];
        discList[subThing] -= 1;
        discList[addThing] = (discList[addThing] | 0) + 1;
        count += check(discList);
    }

    return count;
}
