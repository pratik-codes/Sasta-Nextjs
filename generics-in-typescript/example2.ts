function getElement(arr: any[], index: number): any {
     return arr[index];
}


function getElementSafely<T>(arr: T[], index: number): T {
     return arr[index];
}

let arr = [1, 2, 3, 4, 5];
let val1: any = getElement(arr, 10);
let val2: number = getElementSafely(arr, 10);