//TASK1 
const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
const swap=(arr,i,j)=>{
    let temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
}
let arr = [5, 4, 65, 65, 1];
console.log(bubbleSort(arr));
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK2
const selectionSort=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let last=arr.length-1-i;
        let max=findMax(arr,0,last);
        swap(arr,max,last);
    }
}

const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

const findMax=(arr,start,end)=>{
    let max=start;
    for (let i = 0; i <= end; i++) {
        if(arr[max]<arr[i]){
            max=i;
        }
    }
    return max;
}


let arr = [5, 4, 65, 65, 1];
selectionSort(arr)
console.log(arr);
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK3
const quickSort=(arr,low,high)=>{
    if(low>=high){
        return;
    }
    let s=low;
    let e=high;
    let mid=Math.floor(s+(e-s)/2);
    while(s<=e){
        while(arr[s]<arr[mid]){
            s++;
        }
        while(arr[e]>arr[mid]){
            e--;
        }
        if(s<=e){
            let temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            s++;
            e--;
        }
    }
    quickSort(arr,low,e);
    quickSort(arr,s,high);
}

let arr=[45,4,3,2,56,5];
quickSort(arr,0,arr.length-1);
console.log(arr);
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK4
const linearSearch=(arr,target)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==target)return i;
    }
    return -1;
}

const arr=[1,2,4,5,6,7,3]
console.log(linearSearch(arr,4));
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK5
const binarySearch=(arr,target)=>{
    let s=0;
    let e=arr.length-1;

    while(s<=e){
        let mid = s + (e - s) / 2;
        if(arr[mid]==target)return mid;
        else if(target<arr[mid]){
            e=mid-1;
        }else{
            s=mid+1
        }
    }
}
const arr=[1,2,4,5,6,7,3]
console.log(binarySearch(arr,7));
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK6
const countChar = (str) => {
  const charCount = {};
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  console.log(charCount);
};

countChar("hello world");
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK7
const countChar=(str)=>{
    let count=1;
    let max=1;
    for (let i = 0; i < str.length-1; i++) {
        if(str.charAt(i)===str.charAt(i+1)){
            count+=1;
        }else{
            count=1;
        }
        if(count>max){max=count}
    }
    return max;
}

const str="hellllo peterrrrrr";
console.log(countChar(str));
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK8
const rotateArray = (arr, k) => {
  const n = arr.length;
  k = k % n;
  const rotatedArr = arr.slice(-k).concat(arr.slice(0, n - k));
  return rotatedArr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 4));
// -------------------------------------------------------------------------------------------------------------------------------------------------
//TASK9
const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  console.log(mergedArr);
  return mergedArr;
};

mergeSortedArrays([1, 3, 5], [2, 4, 6]);

