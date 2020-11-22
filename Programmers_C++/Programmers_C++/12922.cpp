#include <string>
#include <vector>

using namespace std;

string solution(int n) {
    string answer = "", add = "¼ö¹Ú", last = "";
    if (n & 1) last = "¼ö";
    n = n >> 1;
    for (int i = 1; i <= n; i = i << 1) {
        if (n & i) answer += add;
        add += add;
    }

    return answer + last;
}