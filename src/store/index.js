import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  item: {
    id: "",
    name: "",
    username: "",
    email: "",
    address: { city: "" },
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.item = {
        id: state.items.length + 1,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        address: action.payload.city,
      };
      state.items.unshift(state.item);
    },
    editItem(state, action) {
      const editedItem = state.items.find((item) => {
        return item.id == action.payload.id;
      });

      editedItem.name = action.payload.name;
      editedItem.email = action.payload.email;
      editedItem.username = action.payload.username;
      editedItem.address.city = action.payload.city;
    },
    deleteItem(state, action) {
      const id = action.payload;

      const deletedItem = state.items.find((item) => {
        return item.id == id;
      });

      const index = state.items.indexOf(deletedItem);
      state.items.splice(index, 1);
    },
  },
});

const store = configureStore({ reducer: dataSlice.reducer });
export const dataAction = dataSlice.actions;
export default store;
