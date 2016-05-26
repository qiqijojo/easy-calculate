function calculate_median(arr) {
	arr.sort(sortNum);
	var oArr = [];
	for(var i=0;i<arr.length;i++){
		if((i+1)%2==0){
			oArr.push(arr[i]);
		}	
	}
	var len = oArr.length;
	if(len%2==0){
		var mid = (oArr[len/2] + oArr[len/2-1])/2;	
	}
	else{
		var mid = oArr[Math.floor(len/2)];	
	}
	return mid;	
}
function sortNum(a,b){
	return a-b;
	}
module.exports = calculate_median;
