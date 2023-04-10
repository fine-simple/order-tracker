import { useEffect, useState } from "react";
import AddNew from "./components/AddNew";
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
      {addMenuVisible && <AddNew hideMenu={hideAddMenu} />}
      <header className="header">
        <h1>Order Helper</h1>
      </header>
      <main>
        <PersonList />
        <button className="btn-add" type="button" onClick={showAddMenu}>
          Add New Order
        </button>
        <hr />
        <Summary />
      </main>
    </>
  );
}

export default App;
