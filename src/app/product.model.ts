export class Product {
  sku: string;
  name: string;
  imageUrl: string;
  department: string[];
  price: number;
  constructor(
  sku: string,
  name: string,
  imageUrl: string,
  department: string[],
  price: number) {
    this.sku =  sku;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.department = department;
  }
}
