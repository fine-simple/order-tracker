import { useEffect, useState } from "react";
import AddNew from "./components/AddNew";
import PersonList from "./components/PersonList";
import Search from "./components/Search";
import Summary from "./components/Summary";

function App() {
  const [persons, setPersons] = useState({
    Hamada: {
      1: {
        name: "Apple",
        amount: 2,
        price: 2.5,
      },
      2: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
    },
    "zane Doe": {
      1: {
        name: "Apple",
        amount: 6,
        price: 2.5,
      },
      2: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
    },
    Tawfik: {
      1: {
        name: "Apple",
        amount: 2,
        price: 2.5,
      },
      2: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
      3: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
      4: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
      5: {
        name: "Apple",
        amount: 2,
        price: 2.5,
      },
      6: {
        name: "Apple",
        amount: 2,
        price: 2.5,
      },
      7: {
        name: "Apple",
        amount: 2,
        price: 2.5,
      },
    },
    xostafa: {
      1: {
        name: "Apple",
        amount: 6,
        price: 2.5,
      },
      2: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
    },
    ElZero: {
      1: {
        name: "Apple",
        amount: 6,
        price: 2.5,
      },
      2: {
        name: "Orange",
        amount: 3,
        price: 3.5,
      },
    },
  });

  const [addMenuVisible, setAddMenuVisibility] = useState(false);

  const [tax, setTax] = useState(0);

  const getOrders = () => {
    const uniqueOrders = {};
    Object.values(persons).forEach(orders =>
      Object.entries(orders).forEach(
        ([id, { name }]) => (uniqueOrders[id] = name)
      )
    );
    return uniqueOrders;
  };

  const taxChangeHandler = newTax => {
    setTax(newTax);
  };

  const showAddMenu = () => {
    setAddMenuVisibility(true);
  };

  const hideAddMenu = () => {
    setAddMenuVisibility(false);
  };

  return (
    <>
      {addMenuVisible && (
        <AddNew hideMenu={hideAddMenu} availableOrders={getOrders()} />
      )}
      <header className="header">
        <h1>Order Helper</h1>
      </header>
      <main>
        <Search />
        <PersonList persons={persons} tax={tax} />
        <button className="btn-add" type="button" onClick={showAddMenu}>
          Add New Order
        </button>
        <hr />
        <Summary persons={persons} tax={tax} changeTax={taxChangeHandler} />
      </main>
    </>
  );
}

export default App;
