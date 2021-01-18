/* 
4. BIGGEST PURCHASERS
    Given a list of purchases, where each purchase has their name and amount spent
    Order purchases from least to greatest

    Example: 
    Input:
    "Dustin $2"
    "andrew $1"
    "joe $3"

*/  

function biggestPurchasers (){

    list = []
    for(let person of arguments) {
        list.push(person.split(' $'));
    }

    let sorted = mergeSort(list);
    let results = [];
    
    for (let el of sorted) {
        results.push(el.join(' $'));
    }
    return results;
}


function merge (m, n) {
    let i = 0; // iterates through m
    let j = 0; // iterates through n
    let results = [];

    while (i < m.length && j < n.length) {
        if (m[i][1] > n[j][1]) {
            results.push(m[i]);
            i++;
        } else if (m[i][1] < n[j][1]) {
            results.push(n[j]);
            j++;
        } else {
                results.push(m[i]);
                results.push(n[j]);
                i++;
                j++;
        }
    }
    while (i < m.length) {
        results.push(m[i]);
        i++;
    }
    while (j < n.length){
        results.push(n[j]);
            j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length) / 2;
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left,right);
}

// Test cases

let test1 = biggestPurchasers("Dustin $2", "Andrew $1", "Joe $3");
console.log(test1);

let test2 = biggestPurchasers("Jelanah $34", "Kevon $19", "Joseph $24", "Samuel $24", "Autumn $12");
console.log(test2);

/*
 About this solution:
    * I used merge sort because it is a very fast sorting method and allows us to quickly sort when the number of 
    purchasers grows larger and larger.
    * I wouldnt personally choose to make my input as strings, but i wanted to make the inputs as close 
    as possible to the original question on hacker rank.
    * Time complexity / Big O ---- O(n*logn). 



    ** thank you for your time.
 */