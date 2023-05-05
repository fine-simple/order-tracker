const localStorageMiddleware = store => next => action => {
  let result = next(action);

  const { persons, items, shared } = store.getState();
  const reducer = action.type.split("/")[0];

  switch (reducer) {
    case "person":
      localStorage.setItem("persons", JSON.stringify(persons));
      break;
    case "item":
      localStorage.setItem("items", JSON.stringify(items));
      break;
    case "shared":
      localStorage.setItem("shared", JSON.stringify(shared));
      break;
  }

  return result;
};

export default localStorageMiddleware;
