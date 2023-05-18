import { PayloadAction } from "@reduxjs/toolkit";

export type Item = {
  name: string;
  price: number;
};

export type Items = {
  [id: string | number]: Item;
};

export type AddItemAction = PayloadAction<{
  id: string | number;
  name: string;
  price: number;
}>;

export type EditItemAction = PayloadAction<{
  id: string | number;
  name: string;
  price: number;
}>;

export type RemoveItemAction = PayloadAction<{
  id: number | string;
}>;
