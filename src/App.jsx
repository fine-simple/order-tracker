import { useState } from "react";
import AddModify from "./components/AddModify";
import PersonList from "./components/PersonList";
import Summary from "./components/Summary";
import { Button, Stack, styled } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
      <Main >
        <PersonList />
        <Button variant="contained" onClick={showAddMenu} sx={{
          margin: "1rem auto",
        }}>
          Add New Order
        </Button>
        <hr />
        <Summary />
      </Main>
    </>
  );
}

export default App;
