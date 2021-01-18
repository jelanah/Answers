// MEETING OVERLAP
// Reads meeting times and determines whether or not the meeting overlaps with the first meeting

function meetingOverlap () {
   let a = arguments[0];
   console.log(a);
   result = []


    for (let i = 1; i < arguments.length; i++) {
        let time = arguments[i];
        // if starts and ends before first meeting
        if(time[1] <= a[0]) {
            result.push('no');
            
        //if start time is before first meeting's end time (except case above)
        } else if (time[0] < a[1]){
            result.push('yes');
        } else result.push('no');
    }
    return result;
} 

let test1 = meetingOverlap([8,10],[9,10],[10,11]);
console.log(test1);

let test2 = meetingOverlap([10, 12], [9,10], [10,2], [11,12]);
console.log(test2);


/* About this solution: 
    Big O -- O(n)
*/
