//Logic :- Grow twice the size.
export interface IDynamicArray {
    growCapacity(): void;
    //shrinkCapacity(): void;
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


class DynamicArray implements IDynamicArray {
    private arr: string[] = [];
    private size: number = 0;
    private maxCapacity: number = 0;
    private capacity: number = 0;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.maxCapacity = capacity;
    }
    private growCapacity() {
        this.maxCapacity = 2 * this.maxCapacity;
    }
    public traverse() {
        let output = "";
        for (let i = 0; i < this.size; i++) {
            output += `${i == 0 ? '' : ','} ${this.arr[i]}`
        }
        return output;
    }
    public insertAtEnd(str: string) {
        if (this.size >= this.maxCapacity) {
            this.growCapacity();
        }
        this.arr[this.size] = str;
        this.size++;
    }
}

export default DynamicArray;
