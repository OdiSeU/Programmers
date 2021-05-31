func solution(x int) bool {
	sum := 0
	for i := x; i > 0; i /= 10 {
		sum += i % 10
	}
	return x%sum == 0
}