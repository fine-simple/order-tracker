import EditIcon from "@mui/icons-material/Edit";

import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import type { FC } from "react";

export interface ItemProps {
  name: string;
  price: number;
  amount: number;
}

const Item: FC<ItemProps> = ({ name, price, amount }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="edit" color="primary">
          <EditIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Typography variant="h5">x{amount}</Typography>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${price}$`} />
    </ListItem>
  );
};

export default Item;
