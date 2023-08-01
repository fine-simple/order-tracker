import { useState } from "react";
import { addItem } from "../ts/reducers/itemSlice/itemSlice";
import { useDispatch } from "../ts/hooks/redux";
import { FC } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

export interface IEditItemProps {
  onSuccess: (id: number | string) => void;
  onCancel: () => void;
  id?: number | string;
  name?: string;
  price?: number;
}

const EditItem: FC<IEditItemProps> = ({
  onSuccess,
  onCancel,
  id,
  name: defaultName = "",
  price: defaultPrice = 0,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>(defaultName);
  const [price, setPrice] = useState<number>(defaultPrice);

  const addHandler = async () => {
    // validate input
    if (name.trim().length === 0) {
      console.log("name is empty");
      return;
    }
    if (isNaN(price) || price < 0) {
      console.log("price is not a positive number");
      return;
    }
    if (!id) id = Date.now();

    dispatch(addItem({ id, name, price }));
    onSuccess(id);
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <form autoComplete="off">
      <Grid
        container
        gap={2}
        justifyContent="center"
        flexDirection="column"
        padding="1rem"
      >
        <TextField
          label="Name"
          size="small"
          autoComplete="off"
          autoCapitalize="on"
          defaultValue={defaultName}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          autoFocus
          label="Price"
          size="small"
          type="number"
          defaultValue={defaultPrice}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <Grid container justifyContent="center">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={addHandler}
            color="primary"
            type="submit"
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={cancelHandler}
            color="error"
          >
            <CancelIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditItem;
