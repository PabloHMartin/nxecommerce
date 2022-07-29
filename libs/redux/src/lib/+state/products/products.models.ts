/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: string | number;
  name: string;
  price: string;
  manufacturer: string;
  color: string;
  desc: string;
  shortDesc: string;
  img: string;
}
