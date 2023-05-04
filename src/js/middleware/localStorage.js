const localStorageMiddleware = store => next => action => {
  let result = next(action);

  const { persons, items, shared } = store.getState();

  localStorage.setItem("persons", JSON.stringify(persons));
  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("shared", JSON.stringify(shared));

  return result;
};

export default localStorageMiddleware;
