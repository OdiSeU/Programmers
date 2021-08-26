function solution(table, languages, preference) {
    const prefMap = new Map();
    let answer = '', max = 0;
    table.forEach(pref => {
        let [field, ...lang] = pref.split(' ');
        let scrMap = new Map(lang.map((v, i) => [v, 5 - i]));
        let score = languages.reduce((acc, lang, i) => acc + (scrMap.get(lang) | 0) * preference[i], 0);
        if(max < score) {
            max = score;
            answer = field;
        }
        else if(max == score && field < answer) answer = field;
    });
    return answer;
}