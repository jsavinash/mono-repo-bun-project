class ArrayIndexOutOfBoundsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArrayIndexOutOfBoundsException";
        Object.setPrototypeOf(this, ArrayIndexOutOfBoundsException.prototype);
    }
}

export interface IFixedArray {
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
    public insertAtBeginning(str: string) {
        if (this.size < this.capacity) {
            let curr = str;
            this.size++;
            for (let i = 0; i < this.size + 1; i++) {
                const temp = this.arr[i];
                this.arr[i] = curr;
                curr = temp;
            }
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public insertAtIdx(str: string, idx: number) {
        if (idx < this.size) {
            this.arr[idx] = str;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public insertAtEnd(str: string) {
        if (this.size < this.capacity) {
            this.arr[this.size] = str;
            this.size++;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public deleteAtBeginning() {
        if (this.size >= 0) {
            for (let i = 0; i < this.size; i++) {
                const next = this.arr[i + 1];
                if (next)
                    this.arr[i] = next;
            }
            this.size--;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }

    }
    public deleteAtIdx(idx: number) {

    }
    public deleteAtEnd() {
        if (this.size >= 0) {
            delete this.arr[this.size];
            this.size--;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public deleteFirstOccurrence(str: string) {
        if (this.size >= 0) {
            let currentIdx = 0;
            let fistOccurrence = false;
            for (let i = 0; i < this.size; i++) {
                const curr = this.arr[i];
                if (curr === str && !fistOccurrence) {
                    fistOccurrence = true;
                    continue;
                }
                this.arr[currentIdx] = curr;
                currentIdx++
            }
            this.size = this.size - 1;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
    public deleteAllOccurrence(str: string) {
        if (this.size >= 0) {
            let currentIdx = 0;
            let countOccurrence = 0;
            for (let i = 0; i < this.size; i++) {
                const curr = this.arr[i];
                if (curr === str) {
                    countOccurrence++;
                    continue;
                }
                this.arr[currentIdx] = curr;
                currentIdx++;
            }
            this.size = this.size - countOccurrence;
        } else {
            throw new ArrayIndexOutOfBoundsException("Index Out of Bounds");
        }
    }
}

export default FixedArray;
