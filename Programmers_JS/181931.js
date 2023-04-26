function solution(a, d, included) {
  return included.reduce((acc, v, i) => acc + (v && a + i * d), 0);
}
