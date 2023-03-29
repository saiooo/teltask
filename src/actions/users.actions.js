const types = {
  GET_USERS: "GET_USERS",
  ADD_USER: "ADD_USER",
};

export default types;

export const addUser = (payload) => {
  return { type: types.ADD_USER, payload };
};

export const getUsers = () => {
  return { type: types.GET_USERS };
};
