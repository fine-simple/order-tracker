const loggerMiddleware = store => next => action => {
  let result = next(action);
  console.log("new state", store.getState());
  return result;
};

export default loggerMiddleware;
