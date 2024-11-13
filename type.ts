type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};

export interface ProductType {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    depth: number;
    height: number;
    width: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
  quantity?: number; // Optional, only for cart purposes
}

// Separate interface for cart items if `quantity` is always needed
export interface CartItemType extends ProductType {
  quantity: number;
}

// Define a structure for `userInfo` to improve type safety
export interface UserInfoType {
  name: string;
  email: string;
  role?: string;
  // add more user properties as needed
}

export interface StateType {
  shopy: {
    cart: CartItemType[];
    userInfo: UserInfoType | null;
  };
}
