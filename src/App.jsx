import { useState } from "react";
import AddModify from "./components/AddModify";
import PersonList from "./components/PersonList";
import Summary from "./components/Summary";

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
      <header className="header">
        <h1>Order Helper</h1>
      </header>
      <main>
        <PersonList />
        <a className="btn-add" type="button" onClick={showAddMenu}>
          Add New Order
        </a>
        <hr />
        <Summary />
      </main>
    </>
  );
}

export default App;
