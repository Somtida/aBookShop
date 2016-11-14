function insertionSort(arr) {
	let value, position;
  for(let i=1;i<arr.length;i++) {
  	value = arr[i];
    position = i;
    console.log("value", value);
  	while(position > 0 && arr[position-1] > value) {
      	arr[position] = arr[position-1];
        --position;
    }
    arr[position] = value;
    console.log("arr inloop:", arr);
  }
  return arr;
}
console.log(insertionSort([7,2,4,1,5,3]))

function bubbleSort(arr) {
	let tmp;
	for(let i=0;i<arr.length;i++) {
  	for(let j=0;j<arr.length-1;j++) {
    	if(arr[j]>arr[j+1]) {
      	tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
    console.log("arr inloop",i,arr);
  }
  return arr;
}

console.log(bubbleSort([3,7,4,1,5,2]))
