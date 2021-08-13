#include <iostream>
#include <vector>
#include <queue>
using namespace std;
const int INF = 123456789;

int solution(int N, vector<vector<int>> road, int K) {
	int cnt = 0;
	vector<vector<pair<int, int>>>weights(N);
	priority_queue<pair<int, int>,vector<pair<int,int>>, greater<pair<int,int>>> dist;
	vector<int> result(N, INF);

	for(int i = 0; i < road.size(); i++) {
		weights[road[i][0] - 1].push_back({road[i][2], road[i][1]-1});
		weights[road[i][1] - 1].push_back({road[i][2], road[i][0]-1});
	}
    
	result[0] = 0;
	dist.push({ 0, 0 });

	while (!dist.empty()) {
		pair<int, int> now = dist.top(); dist.pop();
		if (result[now.second] < now.first) continue;
		for (int i = 0; i < weights[now.second].size(); i++) {
			pair<int, int> next = weights[now.second][i];
			if (now.first + next.first < result[next.second]) {
				result[next.second] = now.first + next.first;
				dist.push({now.first + next.first, next.second	});
			}
		}
	}
	for (int i = 0; i < N; i++) if(K >= result[i]) cnt++;
    return cnt;
}