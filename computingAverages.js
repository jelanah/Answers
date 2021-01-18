/* 
3. COMPUTING AVERAGES
    takes the consecutive k-item subset of the whole series.
    For instance 3-item average of ABCDE takes the avg of ABC, BDC, and CDE

    Constraints:
    2 <= k < 100,000
    1 <= series[i] < 10,000

    Example: 
    k = 2
    series = 1 3 4 10

    output should be:
    2
    3
    7

*/  

const computingAverages = (k,series) => {

    let avg = [];
    let sum = 0;
    for( let i = 0; i < k; i++) {
         sum+= series[i];
    }
    avg.push(Math.floor(sum / k));

    
    let j = k;
    
    while ( j < series.length) {
        sum = sum - series[j-k] + series[j];
        avg.push(Math.floor(sum / k));
        j++;
    } 
 
    return avg;

}

let test1 = computingAverages(2, [1, 3, 4, 10]);
console.log(test1);

let test2 = computingAverages(9, [10000, 300, 4, 100, 72, 3564, 9999, 7772, 1000, 5668, 5691, 4567, 0, 123, 1234, 7890, 6789]);
console.log(test2);


/* About my solution: 
    - I used the sliding window pattern to avoid usage of nested for-loops.
    - This allows the averages to be calculated with just one iteration through the array.
    - Big O = O(n)
*/

