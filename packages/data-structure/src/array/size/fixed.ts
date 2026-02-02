class ArrayIndexOutOfBoundsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArrayIndexOutOfBoundsException";
        Object.setPrototypeOf(this, ArrayIndexOutOfBoundsException.prototype);
    }
}

export interface IFixedArray {
    traverse(): void;
    //insertAtBeginning(str: string): void
    //insertAtIdx(str: string, index: number): void
    insertAtEnd(str: string): void
    // deleteAtBeginning(): void
    // deleteAtIdx(): void
    // deleteAtEnd(): void
    // deleteFirstOccurrence(): void
    // deleteAllOccurrence(): void
    // linearSearch(): void
    // binarySearch(): void
}

export class FixedArray implements IFixedArray {
    private arr: string[] = [];
    private size: number = 0;
    private capacity: number = 0;
    constructor(capacity: number) {
        this.capacity = capacity;
    }
    public traverse() {
        let output = "";
        for (let i = 0; i < this.size; i++) {
            output += `${i == 0 ? '' : ','} ${this.arr[i]}`
        }
        return output;
    }
    public insertAtEnd(str: string) {
        if (this.size < this.capacity) {
            this.arr[this.size] = str;
            this.size++;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
}

export default FixedArray;
