import Summary from "./components/Summary";
import Switcher from "./components/Switcher";
import AddModify from "./components/AddModify";
import Header from "./components/Header";
import { useDispatch } from "./ts/hooks/redux";
import { loadFromLocalStorage } from "./ts/actions";
import { Button as button, Grid, styled, Dialog } from "@mui/material";
import { useState, useEffect } from "react";
import type { FC } from "react";

const Button = styled(button)({
  margin: "1rem auto",
});

const App: FC = () => {
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCloseAddNewDialog = () => {
    setShowAddNew(false);
  };

  const handleOpenAddDialog = () => {
    setShowAddNew(true);
  };

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Dialog open={showAddNew} onClose={handleCloseAddNewDialog}>
        <AddModify onSave={handleCloseAddNewDialog} />
      </Dialog>
      <Grid container alignItems="center" flexDirection="column">
        <Grid container flexDirection="column" md={6} xl={4} sm={10} item>
          <Header />
          <Switcher />
          <Button
            variant="contained"
            title="add new order"
            onClick={handleOpenAddDialog}
          >
            Add New Order
          </Button>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
