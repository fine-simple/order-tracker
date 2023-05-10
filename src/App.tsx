import { useState } from "react";
import AddModify from "./components/AddModify";
import PersonList from "./components/PersonList";
import Summary from "./components/Summary";
import { Button, Stack, styled, Grid } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

function App() {
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
      <Grid container justifyContent="center">
        <Grid container flexDirection="column" md={5} item>
          <PersonList />
          <Button
            variant="contained"
            onClick={showAddMenu}
            sx={{
              margin: "1rem auto",
            }}
          >
            Add New Order
          </Button>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
