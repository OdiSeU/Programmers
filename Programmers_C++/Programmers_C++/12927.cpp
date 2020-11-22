#include <string>
#include <vector>
#include <queue>

using namespace std;

long long solution(int n, vector<int> works) {
    long long answer = 0;
    priority_queue<int> sorted;
    for (int i = 0; i < works.size(); i++) sorted.push(works[i]);
    while (n--) {
        if (sorted.top() == 0) return 0;
        sorted.push(sorted.top() - 1);
        sorted.pop();
    }
    while (!sorted.empty()) {
        answer += (long)sorted.top() * sorted.top();
        sorted.pop();
    }
    return answer;
}