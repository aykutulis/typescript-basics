import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  protected get length(): number {
    return this.data.length;
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
