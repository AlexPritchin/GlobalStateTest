import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: 'Item One',
      subTitle: 'Item one description',
    },
    {
      id: 2,
      title: 'Item Two',
      subTitle: 'Item two description',
    },
    {
      id: 3,
      title: 'Item Three',
      subTitle: 'Item three description',
    },
  ],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state, action) => {
      const lastItemIndex = state.items.length - 1;
      state.items.push({
        ...action.payload.item,
        id: state.items[lastItemIndex].id + 1,
      });
    },
    edit: (state, action) => {
      const itemToEditIndex = state.items.findIndex(
        item => item.id === action.payload.item.id,
      );
      state.items[itemToEditIndex] = action.payload.item;
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const selectAllItems = state => state.itemsPart.items;

export const selectItemById = (state, itemId) =>
  state.itemsPart.items.find(item => item.id === itemId);

export const {add, edit, remove} = itemsSlice.actions;

export default itemsSlice.reducer;
