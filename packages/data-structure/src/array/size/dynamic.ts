class ArrayIndexOutOfBoundsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArrayIndexOutOfBoundsException";
        Object.setPrototypeOf(this, ArrayIndexOutOfBoundsException.prototype);
    }
}

//Logic :- Grow twice the size.
export interface IDynamicArray {
    traverse(): void; //Time :- O(n) || Space :- O(n)
    insertAtBeginning(str: string): void // 
    insertAtIdx(str: string, idx: number): void
    insertAtEnd(str: string): void
    deleteAtBeginning(): void
    deleteAtIdx(idx: number): void
    deleteAtEnd(): void
    deleteFirstOccurrence(str: string): void
    deleteAllOccurrence(str: string): void
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
        if (this.size >= this.maxCapacity) {
            this.maxCapacity = 2 * this.maxCapacity;
        }
    }

    public traverse() {
        let output = "";
        for (let i = 0; i < this.size; i++) {
            output += `${i == 0 ? '' : ','} ${this.arr[i]}`
        }
        return output;
    }
    public insertAtBeginning(str: string) {
        this.growCapacity();
        this.size++;
        let prev = "";
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                prev = this.arr[i];
                this.arr[i] = str;
            } else {
                const curr = this.arr[i];
                this.arr[i] = prev;
                prev = curr;
                continue;
            }
        }
    }
    public insertAtIdx(str: string, idx: number) {
        if (idx >= 0 && idx < this.size) {
            this.arr[idx] = str;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public insertAtEnd(str: string) {
        this.growCapacity();
        this.arr[this.size] = str;
        this.size++;
    }
    public deleteAtBeginning() {
        if (this.size > 0) {
            let next = this.arr[0 + 1];
            let currIdx = 0;
            for (let i = 0; i < this.size; i++) {
                const curr = this.arr[i + 1];
                if (i !== 0) {
                    this.arr[currIdx] = next;
                    next = curr;
                    currIdx++;
                }
            }
            this.size--;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public deleteAtIdx(idx: number) {
        if (idx >= 0 && idx < this.size) {
            let currIdx = 0;
            for (let i = 0; i < this.size; i++) {
                if (i !== idx) {
                    this.arr[currIdx] = this.arr[i];
                    currIdx++;
                }
            }
            this.size--;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public deleteAtEnd() {
        delete this.arr[this.size];
        this.size--;
    }
    public deleteFirstOccurrence(str: string) {
        let currentIdx: number = 0;
        let countOccurrence: number = 0;
        for (let i = 0; i < this.size; i++) {
            const curr = this.arr[i];
            if (curr === str)
                countOccurrence++;
            if (countOccurrence !== 1) {
                this.arr[currentIdx] = curr;
                currentIdx += 1;
            }
        }
        this.size = this.size - 1;
    }
    public deleteAllOccurrence(str: string) {
        let currentIdx: number = 0;
        let countOccurrence = 0;
        for (let i = 0; i < this.size; i++) {
            const curr = this.arr[i];
            if (curr !== str) {
                this.arr[currentIdx] = curr;
                currentIdx += 1;
            } else {
                countOccurrence += 1;
            }
        }
        this.size = this.size - countOccurrence;
    }
    public linearSearch(str: string) {
        for (let i = 0; i < this.size; i++) {
            if (this.arr[i] === str) {
                return i;
            }
        }
        return false;
    }
}

export default DynamicArray;
