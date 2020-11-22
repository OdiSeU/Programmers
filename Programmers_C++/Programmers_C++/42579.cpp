#include <string>
#include <vector>
#include <queue>

using namespace std;

struct Genre {
    string name;
    int plays;
    priority_queue<pair<int, int>> index;
};

vector<int> solution(vector<string> genres, vector<int> plays) {
    priority_queue<pair<int, int>> sortedGen;
    vector<Genre> types;
    vector<int> answer;
    int size = genres.size();
    for (int i = 0; i < size; i++) {
        int idx = 0;
        for (; idx < types.size(); idx++) if (types[idx].name == genres[i]) break;
        if (idx == types.size()) types.push_back({ genres[i] });
        types[idx].plays += plays[i];
        types[idx].index.push({ plays[i], size - i });
    }
    for (int i = 0; i < types.size(); i++) sortedGen.push({ types[i].plays, i });
    while (!sortedGen.empty()) {
        priority_queue<pair<int, int>> sortedIdx = types[sortedGen.top().second].index;
        sortedGen.pop();
        int cnt = 2;
        while (cnt--) {
            if (sortedIdx.empty()) break;
            answer.push_back(-(sortedIdx.top().second - size));
            sortedIdx.pop();
        }
    }

    return answer;
}