import { useState } from "react";
import AddModify from "./components/AddModify";
import PersonList from "./components/PersonList";
import Summary from "./components/Summary";
import reset from "./assets/refresh.svg";

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
      <div className="ad">
        <header className="header">
         <h1>Order Helper</h1>  
        </header>
          {/* <button className="reset" ><img src={reset} alt=""/></button> */}
      </div>
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
