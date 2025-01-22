export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;  // Assuming image URLs are strings
    category: string;
    discountPercent: number;
    isNew: boolean;
    colors: string[];  // Assuming colors is an array of strings
    sizes: string[];   // Assuming sizes is an array of strings
  }
  