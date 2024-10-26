import {makeAutoObservable} from 'mobx';

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

export class Store {
  items = initialState.items;

  constructor() {
    makeAutoObservable(this);
  }

  selectItemById(itemId) {
    return this.items.find(item => item.id === itemId);
  }

  addItem(newItem) {
    const lastItemIndex = this.items.length - 1;
    this.items.push({
      ...newItem,
      id: this.items[lastItemIndex].id + 1,
    });
  }

  editItem(existingItem) {
    const itemToEditIndex = this.items.findIndex(
      item => item.id === existingItem.id,
    );
    this.items[itemToEditIndex] = existingItem;
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}
