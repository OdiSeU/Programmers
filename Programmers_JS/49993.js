function solution(skill, skill_trees) {
    return skill_trees.reduce((cnt, v) => {
        const skillSet = new Set(skill);
        for(let i = 0; i < v.length; i++) {
            if(skillSet.has(v[i])) {
                if(skillSet.values().next().value != v[i]) return cnt;
                else skillSet.delete(v[i]);
            }
        }
        return cnt + 1;
    }, 0);
}