function solution(num_list) {
  const [sum, mult] = num_list.reduce(
    ([sum, mult], v) => [sum + v, mult * v],
    [0, 1]
  );

  return mult < sum ** 2 ? 1 : 0;
}
