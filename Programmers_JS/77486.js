function solution(enroll, referral, seller, amount) {
    let org = { '-': { ref: null, income: 0} };
    
    enroll.forEach((v, i) => {
        org[v] = { ref: referral[i], income: 0 }
    });
    
    seller.forEach((v, i) => {
        let money = amount[i] * 100;
        while(v && money) {
            org[v].income += money - (money / 10 | 0);
            money = money / 10 | 0;
            v = org[v].ref;
        }
    });
    
    return enroll.map(v => org[v].income);
}