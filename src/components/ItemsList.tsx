import type { FC } from "react";
import { useMemo } from "react";
import { useSelector } from "../ts/hooks/redux";
import { List, Typography as typography, styled, Stack } from "@mui/material";
import type { Items } from "../ts/reducers/personSlice/types";
import Item from "./Item";

const Typography = styled(typography)({
  fontSize: "1.5rem",
  margin: "auto",
});

const ItemsList: FC = () => {
  const items = useSelector(state => state.items);
  const persons = useSelector(state => state.persons);

  const itemsCount = useMemo(
    () =>
      Object.values(persons).reduce((acc, person): Items => {
        return Object.entries(person.items).reduce(
          (ac, [id, amount]) => {
            if (ac[id] && amount > 0) {
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

  const mappedItems = useMemo(
    () =>
      Object.entries(items)
        .filter(([id]) => itemsCount[id] > 0)
        .map(([id, { name, price }]) => (
          <Item
            key={id}
            id={id}
            name={name}
            price={price}
            amount={itemsCount[id]}
          />
        )),
    [items, itemsCount]
  );

  return (
    <Stack spacing={2} height="100%">
      {(mappedItems.length && <List>{mappedItems}</List>) || (
        <Typography>No Items yet</Typography>
      )}
    </Stack>
  );
};

export default ItemsList;
