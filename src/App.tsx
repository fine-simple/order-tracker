import { useState } from "react";
import AddModify from "./components/AddModify";
import Summary from "./components/Summary";
import {
  Button as button,
  Grid,
  Container as container,
  styled,
} from "@mui/material";
import type { FC } from "react";
import Switcher from "./components/Switcher";

const Container = styled(container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "1rem",
}));

const Button = styled(button)({
  margin: "1rem auto",
});

const App: FC = () => {
  const [addMenuVisible, setAddMenuVisibility] = useState(false);

  const showAddMenu = () => {
    setAddMenuVisibility(true);
  };

  const hideAddMenu = () => {
    setAddMenuVisibility(false);
  };

  return (
    <>
      {addMenuVisible && <AddModify hideMenu={hideAddMenu} />}
      <Container>
        <Grid container justifyContent="center">
          <Grid container flexDirection="column" md={6} xl={4} sm={10} item>
            <Switcher />
            <Button variant="contained" onClick={showAddMenu}>
              Add New Order
            </Button>
            <Summary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
