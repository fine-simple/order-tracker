import { FormEvent, useState } from "react";
import { useDispatch } from "../ts/hooks/redux";
import {
  addPerson,
  removePerson,
} from "../ts/reducers/personSlice/personSlice";
import type { FC } from "react";
import OrdersEditor from "./OrdersEditor";
import type { Items } from "../ts/reducers/personSlice/types";
import { Button, Stack, Grid, TextField } from "@mui/material";
import AlertDialog from "./AlertDialog";

export interface IAddModifyProps {
  onSave?: () => void;
  id?: string | number;
  name?: string;
  orders?: { [id: number]: number };
}

const AddModify: FC<IAddModifyProps> = ({
  onSave = () => null,
  id,
  name: defaultName = "",
  orders: savedOrders = {},
}) => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<Items>({
    ...savedOrders,
  });
  const [name, setName] = useState<string>(defaultName);
  const [sureDialog, setSureDialog] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate input
    if (name.trim().length === 0) {
      alert("Please add a Name");
      return;
    }

    const newPerson = {
      id,
      name,
      items: orders,
    };
    dispatch(addPerson(newPerson));
    onSave();
  };

  const handleDelete = () => {
    if (id) dispatch(removePerson(id));
  };
  const handleClose = () => setSureDialog(false);

  const showSureDialog = () => setSureDialog(true);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Stack
        gap={2}
        margin="2rem"
        justifyContent="center"
        alignItems={"center"}
      >
        <TextField
          label="Name"
          value={name}
          autoComplete="off"
          autoCapitalize="on"
          required
          onChange={e => setName(e.target.value)}
          size="small"
          autoFocus
        />
        <OrdersEditor orders={orders} setOrders={setOrders} />
        <Grid container justifyContent="center">
          {id && (
            <>
              <Button size="small" color="error" onClick={showSureDialog}>
                Delete
              </Button>
              <AlertDialog
                onClose={handleClose}
                onDelete={handleDelete}
                sureDialog={sureDialog}
              />
            </>
          )}
          <Button type="submit" size="small">
            {(id && "Save") || "Add"}
          </Button>
        </Grid>
      </Stack>
    </form>
  );
};

export default AddModify;
