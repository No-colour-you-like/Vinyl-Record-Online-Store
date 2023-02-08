export interface Product {
  id: number | null;
  author: string;
  albumName: string;
  label: string;
  genre: string[] | [];
  format: string;
  storageImgUrl: string;
  price: number | null;
}
