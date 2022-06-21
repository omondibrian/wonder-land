export class ProductCategory {
  constructor(private readonly id: number, private readonly name: string) {}
}

export class Cart {
  constructor(
    private items: Array<PurchaseItems> = [],
    private grandTotal: number = 0.0,
    private readonly discount: number = 0.0,
    private readonly tax: number = 0.0
  ) {}

  add(prd: PurchaseItems): void {
    this.items.push(prd);
  }

  remove(prdId: number): PurchaseItems | undefined {
    const prd = this.items.find((prd, index) => prd.item.id === prdId);
    if (prd !== undefined) {
      const tempItems = this.items.filter((elm) => elm.item.id !== prdId);
      this.items = [...tempItems];
    }
    return prd;
  }

  calcTotal(): void {
    let total = 0.0;
    this.items.forEach((itm) => {
      total += itm.subTotal();
    });
    this.grandTotal = total + this.tax - this.discount;
  }
}

export class PurchaseItems {
  constructor(private readonly product: ProductEntity, private qty: number) {}

  public get item(): ProductEntity {
    return this.product;
  }

  increamentQty(increase: number): void {
    this.qty += increase;
  }

  descreaseQty(increase: number): void {
    this.qty -= increase;
  }

  subTotal(): number {
    return parseInt(this.product.price) * this.qty;
  }
}

export class ProductEntity {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _price: string,
    private readonly _categoryId: string,
    private readonly _url: string,
    private readonly _description: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): string {
    return this._price;
  }

  public get category(): string {
    return this._categoryId;
  }

  public get url(): string {
    return this._url;
  }

  public get desc(): string {
    return this._description;
  }
}
