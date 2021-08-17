// function solution(numbers) {
//     const big = (n) => BigInt(n);
//     const findMinZero = (n, bit) => n & bit ? findMinZero(n, bit << big(1)) : bit;
//     const findMaxOne = (n, bit) => bit ? (n & bit ? bit : findMaxOne(n, bit >> big(1))) : big(0);
//     return numbers.map(n => {
//         let bit = findMinZero(big(n), big(1));
//         return big(n) ^ findMaxOne(big(n), bit >> big(1)) | bit;
//     });
// }

// function solution(numbers) {
//     const findMinZero = (n, bit) => BigInt(n) & BigInt(bit) ? findMinZero(n, bit * 2) : bit;
//     return numbers.map(n => {
//         let bit = findMinZero(n, 1);
//         return bit === 1 ? n + 1 : n + bit / 2;
//     });
// }

function solution(numbers) {
    const findMinZero = (n, bit) => (n + 1) % (bit * 2) ? bit : findMinZero(n, bit * 2);
    return numbers.map(n => {
        let bit = findMinZero(n, 1);
        return bit === 1 ? n + 1 : n + bit / 2;
    });
}