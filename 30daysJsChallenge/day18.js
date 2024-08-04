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
