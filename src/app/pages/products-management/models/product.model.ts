export class Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
  sold_quantity: number;
  listing_type_id: string;
  condition: string;
  status: string;
  site_id: string;
  initial_quantity: number;
  base_price: number;
  warranty: string;

  constructor(data: {
    id?: string;
    title?: string;
    thumbnail?: string;
    price?: number;
    available_quantity?: number;
    sold_quantity?: number;
    listing_type_id?: string;
    condition?: string;
    status?: string;
    site_id?: string;
    initial_quantity?: number;
    base_price?: number;
    warranty?: string;
  }) {
    this.id = data.id || undefined;
    this.title = data.title || undefined;
    this.thumbnail = data.thumbnail || undefined;
    this.price = data.price || undefined;
    this.available_quantity = data.available_quantity || undefined;
    this.sold_quantity = data.sold_quantity || undefined;
    this.listing_type_id = data.listing_type_id || undefined;
    this.condition = data.condition || undefined;
    this.status = data.status || undefined;
    this.site_id = data.site_id || undefined;
    this.initial_quantity = data.initial_quantity || undefined;
    this.base_price = data.base_price || undefined;
    this.warranty = data.warranty || undefined;
  }
}
