import { useState, useMemo } from "react";
import type { SyntheticEvent } from "react";
import type { FC } from "react";
import {
  List,
  Stack,
  styled,
  FormControl,
  Autocomplete,
  TextField,
  createFilterOptions,
} from "@mui/material";

import { useSelector } from "../ts/hooks/redux";
import OrderEditor from "./OrderEditor";
import EditItem from "./EditItem";
import type { Items } from "../ts/reducers/personSlice/types";
import { Item } from "../ts/reducers/itemSlice/types";

const Fieldset = styled("fieldset")({
  margin: "1rem",
  padding: "1rem",
  borderRadius: "1rem",
  width: "80%",
});

const emptyItem = ["", { name: "", price: 0 }] as [string, Item];

export type OrderPayload = { id: number | string; amount: number };
export interface IOrdersEditorProps {
  orders: Items;
  setOrders: React.Dispatch<React.SetStateAction<Items>>;
}

const filter = createFilterOptions<[string, Item]>();

const OrdersEditor: FC<IOrdersEditorProps> = ({ orders, setOrders }) => {
  const allOrders = useSelector(state => state.items);

  const [addNewVisible, setAddNewVisible] = useState(false);
  const [value, setValue] = useState<[string, Item] | null>(null);

  const availableOrders = useMemo(
    () =>
      Object.entries(allOrders).filter(
        ([orderId]) => !Object.keys(orders).includes(orderId.toString())
      ),
    [allOrders, orders]
  );

  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: [string, Item] | null,
    reason: string
  ) => {
    if (!newValue) return;

    switch (reason) {
      case "selectOption":
        if (newValue[0].startsWith("Add ")) {
          setAddNewVisible(true);
          setValue(newValue);
        } else {
          setOrders(prev => ({ ...prev, [newValue[0]]: 1 }));
          setValue(emptyItem);
        }
        break;
      case "clear":
        setValue(emptyItem);
        break;
      default:
        setValue(newValue);
        break;
    }
  };

  const hideAddNew = () => {
    setAddNewVisible(false);
    setValue(emptyItem);
  };

  const addOrder = (id: number | string) => {
    setOrders(prev => ({ ...prev, [id]: 1 }));
    setAddNewVisible(false);
    setValue(emptyItem);
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
      <legend>Items</legend>
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
          <EditItem
            name={value ? value[1].name : ""}
            onSuccess={addOrder}
            onCancel={hideAddNew}
          />
        )}
        {!addNewVisible && (
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              value={value}
              onChange={handleChange}
              options={availableOrders}
              getOptionLabel={order => {
                if (order[0].startsWith("Add ")) return order[0];
                else return order[1].name;
              }}
              filterOptions={(options, state) => {
                const filtered = filter(options, state);
                if (state.inputValue !== "") {
                  filtered.push([
                    `Add "${state.inputValue}"`,
                    { name: state.inputValue, price: 0 },
                  ]);
                }
                return filtered;
              }}
              renderInput={params => <TextField {...params} label="Add Item" />}
            />
          </FormControl>
        )}
      </Stack>
    </Fieldset>
  );
};

export default OrdersEditor;
