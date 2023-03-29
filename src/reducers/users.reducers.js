import UserTypes from "./../actions/users.actions";

const initialUsers = [
  {
    id: 1,
    name: "Julius",
    lastName: "Pavardenis",
    password: "1234",
    age: 27,
    gender: "male",
  },
];

const Reducer = (state = initialUsers, action) => {
  switch (action.type) {
    case UserTypes.GET_USERS:
      return state;
    case UserTypes.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Reducer;
