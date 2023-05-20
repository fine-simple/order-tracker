import { useState, useMemo } from "react";
import type { ChangeEvent, FC } from "react";
import { useSelector } from "../ts/hooks/redux";
import OrderEditor from "./OrderEditor";
import EditItem from "./EditItem";
import type { Items } from "../ts/reducers/personSlice/types";
import { List, TextField, MenuItem, Stack, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
  margin: "auto",
});
const Fieldset = styled("fieldset")({
  margin: "1rem",
  padding: "1rem",
  borderRadius: "1rem",
  width: "80%",
});

export type OrderPayload = { id: number | string; amount: number };
export interface IOrdersEditorProps {
  orders: Items;
  setOrders: React.Dispatch<React.SetStateAction<Items>>;
}

const OrdersEditor: FC<IOrdersEditorProps> = ({ orders, setOrders }) => {
  const allOrders = useSelector(state => state.items);

  const availableOrders = useMemo(
    () =>
      Object.entries(allOrders).filter(
        ([orderId]) => !Object.keys(orders).includes(orderId.toString())
      ),
    [allOrders, orders]
  );

  const [addNewVisible, setAddNewVisible] = useState(false);
  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;

    switch (option) {
      case "undefined":
        break;
      case "add":
        setAddNewVisible(true);
        break;
      default:
        setOrders((prev: Items) => ({ ...prev, [option]: 1 }));
        break;
    }
  };

  const hideAddNew = () => {
    setAddNewVisible(false);
  };

  const addOrder = (id: number | string) => {
    setOrders(prev => ({ ...prev, [id]: 1 }));
    setAddNewVisible(false);
  };

  const changeOrderHandler = ({ id, amount }: OrderPayload) => {
    if (amount < 1) {
      setOrders(prev => {
        const newOrders = { ...prev };
        delete newOrders[id];
        return newOrders;
      });
      return;
    }
    const newOrder = { [id]: amount };
    setOrders(prev => ({ ...prev, ...newOrder }));
  };

  return (
    <Fieldset>
      <legend>Orders</legend>
      <Stack justifyContent="center">
        <List>
          {Object.entries(orders).map(([id, amount]) => (
            <OrderEditor
              name={allOrders[id].name}
              id={id}
              key={id}
              amount={amount}
              changeOrder={changeOrderHandler}
            />
          ))}
        </List>
        {addNewVisible && (
          <EditItem onSuccess={addOrder} onCancel={hideAddNew} />
        )}
        {!addNewVisible && (
          <StyledTextField
            select
            id="order"
            value="undefined"
            onChange={selectHandler}
            size="small"
          >
            <MenuItem value="undefined" disabled hidden>
              Add Item
            </MenuItem>

            {availableOrders.map(([id, { name }]) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
            <MenuItem value="add">Add New</MenuItem>
          </StyledTextField>
        )}
      </Stack>
    </Fieldset>
  );
};

export default OrdersEditor;
