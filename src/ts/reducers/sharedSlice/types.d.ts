import type { PayloadAction } from "@reduxjs/toolkit";

export type Shared = {
  tax: number;
  tip: number;
  discount: number;
  shared: number[];
};

export type AddSharedItemAction = PayloadAction<{
  itemId: number;
  quantity?: number;
}>;

export type DecreaseSharedItemAction = PayloadAction<{
  itemId: number;
}>;

export type IncreaseSharedItemAction = PayloadAction<{
  itemId: number;
}>;

export type SetTaxAction = PayloadAction<number>;

export type SetTipAction = PayloadAction<number>;

export type SetDiscountAction = PayloadAction<number>;
