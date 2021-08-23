function solution(cacheSize, cities) {
    const cache = new Set();
    return cities.reduce((time, v)=>{
        let city = v.toLowerCase();
        if(cache.delete(city)) time += 1;
        else {
            if(cache.size >= cacheSize) cache.delete(cache.keys().next().value)
            time += 5;
        }
        if(cacheSize) cache.add(city);
        return time;
    }, 0);
}