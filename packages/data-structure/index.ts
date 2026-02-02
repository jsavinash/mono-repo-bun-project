import { FixedArray, DynamicArray } from "./src/array";

console.log('************** FixedArray **************');
const fixedArray = new FixedArray(5);
fixedArray.insertAtEnd("One");
fixedArray.insertAtEnd("Two");
fixedArray.insertAtEnd("Three");
fixedArray.insertAtEnd("Four");
fixedArray.insertAtEnd("Five");
console.log(fixedArray.traverse());


console.log('************** DynamicArray **************');
const dynamicArray = new DynamicArray(5);
dynamicArray.insertAtEnd("One");
dynamicArray.insertAtEnd("Two");
dynamicArray.insertAtEnd("Three");
dynamicArray.insertAtEnd("Four");
dynamicArray.insertAtEnd("Five");
dynamicArray.insertAtEnd("Six");
console.log(dynamicArray.traverse());
