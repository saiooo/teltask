const types = {
  GET_CATS: "GET_CATS",
  ADD_CAT: "ADD_CAT",
  ASSIGN_USER_TO_CATEGORY: "ASSIGN_USER_TO_CATEGORY",
};

export default types;

export const addCat = (payload) => {
  return { type: types.ADD_CAT, payload };
};

export const getCats = () => {
  return { type: types.GET_CATS };
};

export const assignUserToCategory = (payload) => {
  return { type: types.ASSIGN_USER_TO_CATEGORY, payload };
};
