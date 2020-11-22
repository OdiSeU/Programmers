#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    int min = INT16_MAX, max = INT16_MIN;
    string n = "";
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == ' ') {
            if (min > stoi(n)) min = stoi(n);
            if (max < stoi(n)) max = stoi(n);
            n = "";
        }
        else n += s[i];
    }
    if (n != "") {
        if (min > stoi(n)) min = stoi(n);
        if (max < stoi(n)) max = stoi(n);
    }
    return to_string(min) + " " + to_string(max);
}