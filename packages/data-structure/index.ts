import { FixedArray, DynamicArray } from "./src/array";

console.log('************** FixedArray **************');
const fixedArray = new FixedArray(5);
fixedArray.insertAtEnd("One");
fixedArray.insertAtEnd("One");
fixedArray.insertAtEnd("Two");
console.log(fixedArray.traverse());
fixedArray.deleteFirstOccurrence("One");
console.log(fixedArray.traverse());

console.log('************** DynamicArray **************');
const dynamicArray = new DynamicArray(5);


