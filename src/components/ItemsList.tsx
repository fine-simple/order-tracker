import { FC } from "react";
import { useSelector } from "../ts/hooks/redux";
import { Typography, Stack } from "@mui/material";

const ItemsList: FC = () => {
  const items = useSelector(state => state.items);

  return (
    <Stack>
      {Object.entries(items).map(([id, { name, price }]) => (
        <Typography variant="h6" key={id}>
          {name} x {price}
        </Typography>
      ))}
    </Stack>
  );
};

export default ItemsList;
