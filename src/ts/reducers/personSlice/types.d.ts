import { PayloadAction } from "@reduxjs/toolkit";

export type Items = {
  [id: number | string]: number;
};

export type Person = {
  name: string;
  items: Items;
};

export type Persons = {
  [id: number | string]: Person;
};

type AddPersonAction = PayloadAction<{
  id: number | string | undefined;
  name: string;
  items: Items;
}>;

type RemovePersonAction = PayloadAction<number>;

type AddItemAction = PayloadAction<{
  personId: number;
  itemId: number;
}>;

type DecreaseItemAction = PayloadAction<{
  personId: number;
  itemId: number;
}>;

type IncreaseItemAction = PayloadAction<{
  personId: number;
  itemId: number;
}>;
