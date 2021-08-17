function solution(html) {
    let lines = html.split('\n').map(v => v.trim());
    let aTags = lines.filter(v => v.includes('<a '));
    let links = aTags.map(v => v.slice(v.indexOf('href=')+6).split('"')[0]);
    let httpUrls = links.filter(v => v.split(':')[0] !== 'tel' && v.split(':')[0] !== 'mailto');
    return [...new Set(httpUrls)].sort();
}