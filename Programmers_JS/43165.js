function solution(numbers, target) {
    let answer = 0;
    (function dfs(now, sum) {
        if(now == numbers.length) {
            if(sum == target) answer++;
        }
        else {
            dfs(now+1, sum+numbers[now]);
            dfs(now+1, sum-numbers[now]);
        }
    })(0, 0);
    return answer;
}