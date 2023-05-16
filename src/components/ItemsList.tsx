import type { FC } from "react";
import { useMemo } from "react";
import { useSelector } from "../ts/hooks/redux";
import { List, Stack } from "@mui/material";
import { Items } from "../ts/reducers/personSlice/types";
import Item from "./Item";

const ItemsList: FC = () => {
  const items = useSelector(state => state.items);
  const persons = useSelector(state => state.persons);

  const itemsCount = useMemo(
    () =>
      Object.values(persons).reduce((acc, person): Items => {
        return Object.entries(person.items).reduce(
          (ac, [id, amount]) => {
            if (ac[id]) {
              ac[id] += amount;
            } else {
              ac[id] = amount;
            }
            return ac;
          },
          { ...acc }
        );
      }, {} as Items),
    [persons]
  );

  return (
    <List>
      {Object.entries(items).map(([id, { name, price }]) => (
        <Item name={name} price={price} amount={itemsCount[id]} />
      ))}
    </List>
  );
};

export default ItemsList;
