type ShelfInterface = {
  title: string;
};

export default class Shelf<T extends ShelfInterface> {
  private items: Array<T> = new Array<T>();

  add(item: T): void {
    this.items.push(item);
  }
  getFirst(): T {
    return this.items[0];
  }
  find(title: string): T {
    return this.items.filter((v) => v.title === title)[0];
  }

  printItem(): void {
    this.items.forEach((v) => console.log(v));
  }
}
