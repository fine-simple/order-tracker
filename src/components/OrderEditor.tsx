import type { FC } from "react";
import type { OrderPayload } from "./OrdersEditor";
import {
  ListItem as listItem,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ListItem = styled(listItem)({
  justifyContent: "center",
  gap: "0.5rem",
});

export interface IOrderEditorProps {
  id: string | number;
  name: string;
  amount: number;
  changeOrder: ({ id, amount }: OrderPayload) => void;
}

const OrderEditor: FC<IOrderEditorProps> = ({
  id,
  name,
  amount,
  changeOrder,
}) => {
  const increaseHandler = () => {
    changeOrder({ id, amount: amount + 1 });
  };

  const decreaseHandler = () => {
    if (amount > 0) {
      changeOrder({ id, amount: amount - 1 });
    }
  };

  return (
    <ListItem>
      <IconButton color="secondary" onClick={decreaseHandler}>
        <RemoveIcon />
      </IconButton>
      <Typography>
        {name} x{amount}
      </Typography>
      <div>
        <IconButton color="secondary" onClick={increaseHandler}>
          <AddIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default OrderEditor;
