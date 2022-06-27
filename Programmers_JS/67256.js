function solution(numbers, hand) {
    const coord = [
        [2,0],[-1,-1],[-1,0],[-1,1],[0,-1],
        [0,0],[0,1],[1,-1],[1,0],[1,1]
    ];
    const hands = {
        'hand': hand==='right' ? 'R' : 'L',
        'unhand': hand==='right' ? 'L' : 'R',
    }
    const getDist = (crd1, crd2) => Math.abs(crd1[0]-crd2[0])+Math.abs(crd1[1]-crd2[1]);
    const getHand = (hand, unhand, number) => {
        switch(number) {
            case 1: case 4: case 7: return 'L';
            case 3: case 6: case 9: return 'R';
            default:
                let hand_dist = getDist(hand, coord[number]);
                let unhand_dist = getDist(unhand, coord[number]);
                return hand_dist > unhand_dist ? hands['unhand'] : hands['hand'];
        }
    }
    let hands_pos = { 'L' : [2,-1], 'R' : [2,1] };
    
    return numbers.map(n => {
        let h = getHand(hands_pos[hands['hand']], hands_pos[hands['unhand']], n);
        if(h === 'L') hands_pos['L'] = coord[n];
        else hands_pos['R'] = coord[n];
        return h;
    }).join('');
}