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

