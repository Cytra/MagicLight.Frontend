// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class Product {
  id?: number;
  name?: string;
  price?: number;
  GrossPrice?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  shortDetailsLt?: string;
  description?: string;
  descriptionLt?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  categoryLt?: string;
  tags?: ProductTags[];
  colors?: ProductColor[];

  constructor(
    id?: number,
    name?: string,
    price?: number,
    GrossPrice?: number,
    salePrice?: number,
    discount?: number,
    pictures?: string,
    shortDetails?: string,
    shortDetailsLt?:string,
    description?: string,
    descriptionLt?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    categoryLt?: string,
    tags?: ProductTags[],
    colors?: ProductColor[]
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.GrossPrice = GrossPrice;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.shortDetailsLt = shortDetailsLt;
    this.description = description;
    this.descriptionLt = descriptionLt;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.categoryLt = categoryLt;
    this.tags = tags;
    this.colors = colors;
  }

 }
  // Color Filter
  export interface ColorFilter {
    color?: ProductColor;
  }
