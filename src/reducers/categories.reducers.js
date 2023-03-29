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

  {
    id: 4,
    name: "Banana",
    parentCategoryId: 1,
    userIDs: [],
  },

  {
    id: 5,
    name: "Skin",
    parentCategoryId: 4,
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
      return state.map((cat) => {
        if (cat.id === action.payload.categoryId && action.payload.userId) {
          return {
            ...cat,
            userIDs: [...cat.userIDs, action.payload.userId],
          };
        }
        return cat;
      });
    default:
      return state;
  }
};

export default Reducer;
