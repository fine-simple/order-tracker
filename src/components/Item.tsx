import EditIcon from "@mui/icons-material/Edit";

import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import type { FC } from "react";
import { useState } from "react";
import EditItem from "./EditItem";

export interface ItemProps {
  id: string;
  name: string;
  price: number;
  amount: number;
}

const Item: FC<ItemProps> = ({ id, name, price, amount }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const handleClose = () => {
    setShowEdit(false);
  };

  const handleEdited = () => {
    setShowEdit(false);
  };

  return (
    <>
      <Dialog open={showEdit} onClose={handleClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <EditItem
            id={id}
            name={name}
            price={price}
            onCancel={handleClose}
            onSuccess={handleEdited}
          />
        </DialogContent>
      </Dialog>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            color="primary"
            onClick={handleShowEdit}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Typography variant="h5">x{amount}</Typography>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`${price}$`} />
      </ListItem>
    </>
  );
};

export default Item;
