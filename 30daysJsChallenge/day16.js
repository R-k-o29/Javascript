//TASK1
const factorial=(num)=>{
    let fact=0;
    if(num==0){
        return 1;
    }
    fact=num*factorial(num-1);
    return fact;
}

console.log(factorial(5));
console.log(factorial(6));

//TASK2
const nthFibo=(num)=>{
    if(num<=1){
        return num;
    } 
    return nthFibo(num-1)+nthFibo(num-2);
}
console.log(nthFibo(4));
console.log(nthFibo(5));

//TASK3
const sum=(arr,index=0)=>{
    if(index>=arr.length){
        return 0;
    }
    return arr[index]+sum(arr,index+1);
}
arr=[1,2,3,4,5];
console.log(sum(arr));

//TASK4
const maxVal=(arr,index=0,currMax=-Infinity)=>{
    if(index>=arr.length){
        return currMax;
    }
    currMax=Math.max(arr[index],currMax);
    return maxVal(arr,index+1,currMax);
}
arr=[2,3,4,5,67,8,9];
console.log(maxVal(arr));

//TASK5
const revStr=(str)=>{
    if(str.length==0){
        return "";
    }
    return revStr(str.substr(1))+str.charAt(0);
}

console.log(revStr("Hello"));

//TASK6
const isReverse=(str)=>{
    const checkPalindrome=(start,end)=>{
        if(start>=end){
            return true;
        }
        if(str[start]!=str[end]){
            return false;
        }
        return checkPalindrome(start+1,end-1);

    }
    return checkPalindrome(0,str.length-1);
}

console.log(isReverse("aba"));

//TASK7
const binarySearch=(arr,target,s=0,e=arr.length)=>{
    if(s>e){
        return -1;
    }
    while(s<=e){
        let mid = s + (e - s) / 2;
        if(arr[mid]===target){
            return mid;
        }else if(target<arr[mid]){
            binarySearch(arr,target,0,mid-1);
        }else{
            binarySearch(arr, target,mid+1,e);
        }
    }
    return -1;
}

let arr=[1,2,3,4,5];
console.log(binarySearch(arr,4));

//TASK8
const occurances=(arr,target,index,count=0)=>{
    if(index>arr.length){
        return count;
    }
    if(arr[index]===target){
        count++;
    }
    return occurances(arr,target,index+1,count);
}

arr=[1,2,3,4,5,6,6,4,2,2,2,];
console.log(occurances(arr,4,0));

//TASK9

