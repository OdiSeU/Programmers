function getPeople(place) {
    let people = [];
    for(let r=0; r<place.length; r++) {
        for(let c=0; c<place[r].length; c++) {
            if(place[r][c] === 'P') people.push([r,c]);
        }
    }
    return people;
}

function isGoodPos(place, p1, p2) {
    let dist = Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
    let isGood = true;
    // 거리 2 초과인 경우 안전
    // POOP
    if(dist > 2) isGood = true;
    // 거리 2 미만인 경우 불안전
    // PP
    else if(dist < 2) isGood = false;
    // 거리 2 && y 좌표가 같은 경우
    // POP
    else if(p1[0] === p2[0]) {
        isGood = place[p1[0]][(p1[1]+p2[1])/2] === 'X';
    }
    // 거리 2 && x 좌표가 같은 경우
    // P
    // O
    // P
    else if(p1[1] === p2[1]) {
        isGood = place[(p1[0]+p2[0])/2][p1[1]] === 'X';
    }
    // PO
    // OP
    else if(p1[0]-p2[0]+p1[1]-p2[1]) {
        let [r1, c1] = [Math.max(p1[0], p2[0]), Math.min(p1[1], p2[1])];
        let [r2, c2] = [Math.min(p1[0], p2[0]), Math.max(p1[1], p2[1])];
        isGood = place[r1][c1] === 'X' && place[r2][c2] === 'X';
    }
    // OP
    // PO
    else {
        let [r1, c1] = [Math.max(p1[0], p2[0]), Math.max(p1[1], p2[1])];
        let [r2, c2] = [Math.min(p1[0], p2[0]), Math.min(p1[1], p2[1])];
        isGood = place[r1][c1] === 'X' && place[r2][c2] === 'X';
    }
    return isGood;
}

function solution(places) {
    let answer = [];
    for(let t=0; t<places.length; t++) {
        let place = places[t];
        let people = getPeople(place);
        let isGood = true;
        for(let i=0; i<people.length-1; i++) {
            for(let j=i+1; j<people.length; j++) {
                isGood = isGoodPos(place, people[i], people[j]);
                if(!isGood) break;
            }
            if(!isGood) break;
        }
        answer.push(isGood?1:0);
    }
    return answer;
}