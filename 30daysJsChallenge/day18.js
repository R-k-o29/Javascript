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
