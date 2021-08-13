function solution(brgLen, weight, trucks) {
    let time = 0, crossing = new Array(brgLen).fill(0);
    for(let trkIdx = 0, crsIdx = 0; trkIdx < trucks.length; time++) {
        let addKg = 0;
        weight += crossing[crsIdx++];
        if(weight >= trucks[trkIdx]) weight -= addKg = trucks[trkIdx++];
        crossing.push(addKg);
    }
    return time + brgLen;
}