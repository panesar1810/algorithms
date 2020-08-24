// Sort array of single elements
export const bubbleSort = (arr: any[]) => {
    const length = arr.length;
	let flag: boolean = true;
	
	while (flag) {
        flag = false;
        for (let i = 0; i < length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                flag = true;
            }
        }
	}
    return arr;
};

// Sort array of objects by comparing a property of object
export const bubbleSortObs = (arr: any[], cmpProp: any) => {
	const length = arr.length;
	let flag: boolean = true;
	
	while (flag) {
        flag = false;
        for (let i = 0; i < length - 1; i++) {
            if (arr[i][`${cmpProp}`] > arr[i + 1][`${cmpProp}`]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                flag = true;
            }
        }
	}
    return arr;
};