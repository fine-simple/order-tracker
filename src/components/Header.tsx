import {
  AppBar,
  Toolbar,
  Typography as typography,
  Button,
  styled,
} from "@mui/material";
import { useState } from "react";
import type { FC } from "react";
import AlertDialog from "./AlertDialog";
import { useDispatch } from "../ts/hooks/redux";
import { clearAll } from "../ts/actions";

const Typography = styled(typography)({
  flexGrow: 1,
});

const Header: FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(clearAll());
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleClearAll = () => {
    setShowAlert(true);
  };

  return (
    <>
      <AlertDialog
        onClose={handleCloseAlert}
        sureDialog={showAlert}
        onDelete={handleDeleteAll}
      />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Order Tracker</Typography>
          <Button onClick={handleClearAll} color="error">
            Clear All
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
