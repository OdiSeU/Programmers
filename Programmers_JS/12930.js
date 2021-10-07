function solution(s) {
    let answer = '', isOdd = true;
    for(let i = 0; i < s.length; i++){
      if(s[i] == ' '){
          answer += s[i];
          isOdd = true;
      }
      else{
          answer += isOdd ? s[i].toUpperCase() : s[i].toLowerCase();
          isOdd = !isOdd;
      }
    }
    return answer;
}