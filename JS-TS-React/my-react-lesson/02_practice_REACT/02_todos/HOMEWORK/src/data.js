import { v4 } from "uuid";

export const defaultState = [
  { value: "Pants", id: v4(), packed: false },
  { value: "Jacket", id: v4(), packed: false },
  { value: "iPhone Charger", id: v4(), packed: false },
  { value: "MacBook", id: v4(), packed: false },
  { value: "Sleeping Pills", id: v4(), packed: true },
  { value: "Underwear", id: v4(), packed: false },
  { value: "Hat", id: v4(), packed: false },
  { value: "T-Shirts", id: v4(), packed: false },
  { value: "Belt", id: v4(), packed: false },
  { value: "Passport", id: v4(), packed: true },
  { value: "Sandwich", id: v4(), packed: true },
];
