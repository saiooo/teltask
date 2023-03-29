import CatTypes from "./../actions/categories.actions";

const initialCats = [
  {
    id: 1,
    name: "Fruits",
    parentCategoryId: null,
    userIDs: [],
  },

  {
    id: 2,
    name: "Vegetables",
    parentCategoryId: null,
    userIDs: [],
  },

  {
    id: 3,
    name: "Dishes",
    parentCategoryId: null,
    userIDs: [],
  },
];

const Reducer = (state = initialCats, action) => {
  switch (action.type) {
    case CatTypes.GET_CATS:
      return state;
    case CatTypes.ADD_CAT:
      return [...state, action.payload];
    case CatTypes.ASSIGN_USER_TO_CATEGORY:
      const category = state.find(
        (cat) => cat.id === action.payload.categoryId
      );
      if (category) {
        return state.map((cat) => {
          if (action.payload.userId) {
            return {
              ...cat,
              userIDs: [...userIDs, action.payload.userId],
            };
          }
          return cat;
        });
      }
    default:
      return state;
  }
};

export default Reducer;
