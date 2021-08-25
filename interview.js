
// Problem:
// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
function arrSum(arr){
    var sum =0;
    for(let el of arr){
        sum += el +1;
    }
    return sum;
}

console.log(arrSum([1,4,23,34,2,7,17,9]));

// Given a string, reverse each word in the sentence 

function reverseStr(str){
    var newStr = '';
    var a = str.split(' ');
    for(let el of a){   
        let elArr = el.split('');
        let reverse = elArr.reverse();
        let strJoin = reverse.join('');      
        newStr += strJoin + ' ';                
    };
    return newStr;    
}
console.log(reverseStr('Also, the for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties, this means if you add any additional properties to the array/s prototype, then those properties will also appear in the loop.'));

function findNum(arr){
    let a = arr.sort((a,b)=>a-b);
    for(let i=a[0];i<a.length + a[0];i++){
        if(i!=a[i-1]){
            return 'Missing number is ' + i +'.';
    }
    }
}
console.log(findNum([2, 5, 1, 4, 9, 6, 3, 7]));


function removeDuplicate(arr){
    return [new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]));

function checkInteger(number){
    if(number%(Math.floor(number))===0){
        return true;
    }
    return false;
}

console.log(checkInteger(1.5));
console.log(checkInteger(15.0));
console.log(checkInteger(1.05));

function duplicate(arr,n){
    let a=[];
while(n>0){
   a.push(...arr);
    n--;
    console.log('n',n)
}
return a;
}

console.log(duplicate([1,2,3,6,7],3));

function twoSum(arr, sum){
    let result =[];
    let a = arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(a.indexOf(sum-a[i])>-1 && a[i] <= sum-a[i]){
            result.push([a[i], sum-a[i]]);
        }
    }
    return result;
}
console.log(twoSum([3, 5, 2, -4, 8, 11], 7));


function findOverlap([min1, max1, min2, max2, x]){
    let n = 0;
    let arr1 = [];
    let arr2 = [];
    for(let i=min1; i<max1 +1; i++){
       arr1.push(i) ;       
    }; 
       console.log('arr1',arr1);
    for(let i=min2; i<max2 +1; i++){
        arr2.push(i) ;       
     }; 
     console.log('arr2',arr2);     
     for(let i=0;i<arr2.length;i++){
         if(arr1.indexOf(arr2[i])>-1){
             n++;             
         }
     };
     console.log('n',n);
     if(n>=x){
         return true;
     }
     return false;   
};

console.log(findOverlap([4, 10, 2, 6, 3]))

function findMaxProfit(arr){
    let max = 0;
    for(let i=0;i<arr.length -1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]-arr[i]>max){
                max = arr[j]-arr[i];
            }            
        }        
    }
    return max;
}
console.log(findMaxProfit([45,40, 38,   35, 31, 24,11]));

function fibonacci(n){
    if(n<0){
        return 'n should be a positive number.'
    }
    else if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }else{
        return fibonacci(n-2)+fibonacci(n-1);
    }    
};

console.log(fibonacci(10));

function fibonacciArr(n){
    let arr = [];
    for(let i=0;i<=n;i++){
        arr.push(fibonacci(i));
    }
    return arr;
}
console.log(fibonacciArr(5));

function isPrime(n){
     if(n<2){
        return false;
    } else{
        for(let i=2;i<=n/2;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;     
    }     
}
console.log(isPrime('2',2));
console.log(isPrime('5',5));
console.log(isPrime('4',4));
function findAllPrimes(n){
    let arr=[];
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
};
console.log(findAllPrimes(100));

function flatDeepNestedArray(arr){
    let newArr =arr.reduce((acc,el)=>{
        return acc.concat(Array.isArray(el) ? flatDeepNestedArray(el) : el);
    },[]);
    return newArr;
}

// console.log(flatDeepNestedArray([2,4,[[['strings',3,['hello',[['good morning!',[3,45,23,['aussie']]],5]],0,]]]]))
console.log(flatDeepNestedArray([2,5,[39,50,[63,'hello world!']]]));



function findLongestStr(arr){
    let max = 0;
    let str = '';
    for(let i=0;i<arr.length;i++){
        if(max<arr[i].length){
            max=arr[i].length;
            str=arr[i];
            console.log('max',max);
            console.log('str',str);
        };
    }
    return str;
};

console.log(findLongestStr(['gut','hi','hello','good-morning!','1']));

function countCharRepeatedTimes(str){
    // let str = s.toLowerCase();
    let arr = str.split('');
    let result = arr.reduce((a,c)=>{
        a[c]=a[c]? a[c]+1:1;
        return a;
    },[]);
    const sortResult = Object.fromEntries(
        Object.entries(result).sort(([,a],[,b])=>b-a)
    );
    return sortResult;
}

console.log(countCharRepeatedTimes("I want to count the number of occurances of each char in this string"));


function countFruitNum(arr){
    let newArr = arr.reduce((acc, value)=>{
        acc[value]=acc[value]? acc[value]+1:1;
        return acc;
    },{});
    // return newArr;
    let sortNum=Object.fromEntries(
        Object.entries(newArr).sort(([,a],[,b])=>b-a)
    );
    return sortNum;
};
console.log(countFruitNum(['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig']));




function flatAllNestedArray(arr){
    let newArr = arr.reduce((acc,item)=>{
        console.log('acc',acc);
        return acc.concat(Array.isArray(item)? flatAllNestedArray(item):item);
    },[]);
    console.log('newArr',newArr);
    return newArr;
}

console.log(flatAllNestedArray([2,[63,'hello world!'],5,[39,50]]));

function flatArrays(arr){
    let newArr = arr.reduce((acc,item)=>{
        console.log('acc',acc);
        return acc.concat(Array.isArray(item)? flatArrays(item):item)
    },[])
    console.log('newArr', newArr);
    return newArr;
};
console.log(flatArrays([2,[63,'hello world!',['good',23,45,['deep-nested']]],5,[39,50]]));

function countTimes(str){
    let arr = str.split('');
    let newArr = arr.reduce((acc,value)=>{
        acc[value] = acc[value]? acc[value]+1:1;
        console.log('acc',acc);
        return acc;
    },{});
    console.log('newArr',newArr);
    // return newArr;
    let sortArray = Object.fromEntries(
        Object.entries(newArr).sort(([,a],[,b])=>b-a)
    );
    return sortArray;
}

console.log(countTimes("I want to count the number of occurances of each char in this string."));


function reverseNumOrder(num){
    return num.toString().split('').reverse().join('');
};

console.log(reverseNumOrder(12345678));

function palindromesChecker(str){
    let strReverse = str.split('').reverse().join('');
    if(str === strReverse){
        return true
    }
    return false;
}

console.log(palindromesChecker('madam'));

function strCombo(str){
    let arr = str.split('');
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            newArr.push(arr.slice(i,j));
        }
    }
    return newArr;
}

console.log(strCombo('javascript'))

function sortLettersInAlphabeticalOrder(str){
    return str.split('').sort().join('');
}
console.log(sortLettersInAlphabeticalOrder('webmaster'))


function capitalizeFirstLetter(str){
    let arr = str.split(' ');
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray.push((arr[i].slice(0,1).toUpperCase()+ arr[i].slice(1).toLowerCase()));
    }
    return newArray.join(' ');
}
console.log(capitalizeFirstLetter('method returns a shallow copy of a portion of an array into a new array object.'))


function findTheLongest(str){
    let arr = str.split(' ');
    let max=0;
    let longestStr ='';
    for(let i =0;i<arr.length;i++){
        if(max<arr[i].length){
            max = arr[i].length;
            longestStr=arr[i];
        }
    }
    return longestStr +' is the longest word in this string, the length is '+ max +'.';
}
console.log(findTheLongest('Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.'))

function findVowel(str){
    let arr = str.toLowerCase().split('');
    let count =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==='a'||arr[i]==='e'||arr[i]==='i'||arr[i]==='o'||arr[i]==='u'){
            count ++;
        }
    }
    return count;
}
console.log(findVowel('Write a JavaScript function.'))


function typeCheck(x){
    return typeof(x);

};
console.log(typeCheck({}));

function findTwoSecond(arr){
    let newArr = arr.sort((a,b)=>a-b);
    return 'The second largest is '+ newArr[arr.length-2] +' , and the second smallest is '+ newArr[1] +'.'
}

console.log(findTwoSecond([2,4,2,1,9,4,7,45]))


function findPerfectNum(n){
   let result =[];
    for(let i=2;i<n;i++){
        let a =[];
        // console.log('i',i);         
        for(let j=1;j<=i/2;j++){
             if(i%j===0){
            a.push(j);
            // console.log('a',a)
        }      
    }
    // console.log('sum',a.reduce((a,c)=>a+c));
     if(a.reduce((acc,val)=>acc + val) === i){
        result.push(i);
        // console.log('result',result);
        };            
    }
    return result;
};
console.log(findPerfectNum(100000));
//  [6, 28, 496, 8128]

function findFactors(n){
    if(n<1){
        return 'Not exist.'
    }
    let result = [];
    for(let i=1;i<=n/2;i++){
        if(n%i===0){
            result.push(i);
        }
    }
    return result;
}
console.log(findFactors(99));

function amountTocoins(n, arr){
    let a = arr.sort((a,b)=>b-a);
    let newArr= [];
    var tem = n;
 while(tem>=arr[0]){
     tem -=arr[0];
     newArr.push(arr[0]);     
     };
     
while(tem>=arr[1]){
    tem -=arr[1];
    newArr.push(arr[1]);
    };
    
while(tem>=arr[2]){
    tem -=arr[2];
   newArr.push(arr[2]);
    };
    
while(tem>=arr[3]){
    tem -=arr[3];
    newArr.push(arr[3]); 
    };
    
while(tem>=arr[4]){
    tem -=arr[4];
    newArr.push(arr[4]);
    };
let newList = newArr.reduce((a,c)=>{
    a[c]=a[c] ? a[c]+1:1;
    return a;
},{});
    return newList;
};
console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

function category(arr){
    let newArr =arr.reduce((a,c)=>{
        a[c]=a[c]? a[c]+1:1;
        return a;
    },{})
    return newArr;
}
console.log(category([25, 25, 25, 10, 10, 2, 1]));


function exp(b,n){
    if(b===0){
        return 'Incorrect.'
    } else if(n===0 && b!==0){
        return 1;
    } else {
        return b* exp(b,n-1);
    }
};
console.log(exp(2,5));

function findUnique(str){
    let newStr ='';
    for(let i=0;i<str.length;i++){
        if(newStr.indexOf(str.charAt(i))===-1){
            newStr+= str[i];
        }
    }
    return newStr;
};
console.log(findUnique("thequickbrownfoxjumpsoverthelazydog"))

function countOccurrences(str){
    let s = str.split('');
    let list = s.reduce((acc,val)=>{
        acc[val]=acc[val]? acc[val] + 1 : 1;
        return acc;
    },{});
    return Object.fromEntries(
        Object.entries(list).sort(([,a],[,b])=>b-a));  
};

console.log(countOccurrences('A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.'));

function returnLargerElements(arr, n){
    let newArr = arr.filter(el=>el>n)
    return newArr;
};

console.log(returnLargerElements([25, 10, 5, 2, 1],9))

function countTimes(str){
    let arr = str.split('');
    let list = arr.reduce((a,c)=>{
        a[c]=a[c]? a[c] + 1 : 1;
        return a;
    },{});
    let sortedObj = Object.fromEntries(
        Object.entries(list).sort(([,a],[,b])=>b-a)
    );
    for(let el of sortedObj){
        
    }
    return sortedObj;
};

console.log(countTimes('Function is a predicate, to test each element of the array.'));

function randomList(num){
    const LIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text =''; 
    for(let i=0;i<num;i++){
        let newList = LIST.charAt(Math.ceil(Math.random() *(LIST.length - 1)));
        text += newList;
    }    
    return text;
};

console.log(randomList(10));

function findSubset(arr, n){
    if(arr.length < n){
        return 'not possible.'
    }
    let a = [];
    for(let i=0;i<arr.length - n;i+=n){


    }
}

function findSpecifiedLetterOccurreces(str,x){
    let s = str.split('');
    let list = s.reduce((a,c)=>{
        a[c] = a[c]? a[c] + 1 : 1;
        return a;
    },{})
    return x +' repeated times are ' + list[x] +'.';
}

console.log(findSpecifiedLetterOccurreces( 'Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor', 'o'));

function findFirstUniqueness(str){
let count =0;
let result='';
for(let i=0;i<str.length;i++){
    count =0;
    for(let j=0;j<str.length;i++){
        if(str[j]===str[i]){
            count ++;
        }        
    }
    if(count === 1){
        result = str[i];
        return result;
        }   
}

};
console.log(findFirstUniqueness('abacddbec'));

function sortArray(arr){
    return arr.sort((a,b)=>b-a);
}

console.log(sortArray( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


function findLongestName(arr){
    let max = 0;
    let result ='';
    for(let i=0;i<arr.length;i++){
        if(arr[i].length >max){
            max = arr[i].length;
            result = arr[i];
        }
    }
    return result;
}
console.log(findLongestName(["Australia", "Germany", "United States of America"]));
function findUniqSubStr(str){
    let r ='';
    let max = 0;
    for(let i=0;i<str.length;i++){
        let temi = str.substr(i);
        for(let j=1;j<temi.length;j++){
            let temj = temi.substr(0,j);
            let temjArr= temj.split('');
            let count =0;
            for(let x=0;x<temjArr.length;x++){
                if(temjArr.indexOf(temjArr[x])>-1){
                    count++;
                };                
            }
            if(count ===1){
                if(temj.length > max){
                    max = temj.length;
                    r = temj;
                }                    
            }
        }
    }
    return r;
};
console.log(findUniqSubStr('stringwithoutrepeatingcharacters'))


function findLongestPalindromeSubStr(str){
    let max =0;
    let r ='';
    for(let i=0;i<str.length;i++){
        let temi = str.substr(i);
        for(let j=1;j<temi.length;j++){
            let temj = temi.substr(0,j);
            let temjReverse = temj.split('').reverse().join('');
            if(temj === temjReverse){
                if(temj.length >=max){
                    max = temj.length;
                    r=temj;
                }                
            }
        }
    }
    return r;
};
console.log(findLongestPalindromeSubStr( "abracadabra"));

