import Header from "./components/Header";
import { useDispatch } from "./ts/hooks/redux";
import { loadFromLocalStorage } from "./ts/actions";
import {
  Button as button,
  Grid,
  styled,
  Dialog,
  Typography,
} from "@mui/material";
import { useState, useEffect, lazy, Suspense } from "react";
import type { FC } from "react";

const Switcher = lazy(() => import("./components/Switcher"));
const Summary = lazy(() => import("./components/Summary"));
const AddModify = lazy(() => import("./components/AddModify"));

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
    <Suspense
      fallback={
        <Typography variant="body1" color="InfoText">
          Loading...
        </Typography>
      }
    >
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
    </Suspense>
  );
};

export default App;
