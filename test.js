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
