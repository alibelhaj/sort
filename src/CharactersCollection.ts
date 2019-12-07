import { Sorter } from "./Sorter";

export class CharacteresCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rigthIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rigthIndex: number): void {
    const characteres = this.data.split("");
    const leftHand = characteres[leftIndex];
    characteres[leftIndex] = characteres[rigthIndex];
    characteres[rigthIndex] = leftHand;

    this.data = characteres.join("");
  }
}
