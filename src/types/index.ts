// src/types/index.ts
export interface CoffeeProduct {
  _id?: string;
  id?: string; // Keep for backward compatibility
  name: string;
  description: string;
  price: number;
  image: string;
  category: "beans" | "ground" | "equipment" | "accessories";
  origin?: string;
  roastLevel?: "light" | "medium" | "dark";
  featured?: boolean;
  sellerId?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem extends CoffeeProduct {
  quantity: number;
}

export interface User {
  id: string;
  role: "owner" | "user";
  username: string;

  nombre: String;
  apellido: String;
  correo: { type: String; unique: true };
  empresa: String;
  rol: String;
  contrasena: String;
}
