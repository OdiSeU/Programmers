function solution(people, limit) {
    let cnt = 0;
    people = people.sort((a,b)=>a-b);
    for(let i = 0, j = people.length - 1; i <= j; j--, cnt++)
        if(people[i] + people[j] <= limit) i++;
    return cnt;
}