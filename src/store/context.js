import {createContext, useContext, useReducer} from 'react';

const ItemsContext = createContext(undefined);

const initialItems = [
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
];

const itemsReducer = (items, action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          ...action.item,
          id: items[items.length - 1].id + 1,
        },
      ];
    }
    case 'edit': {
      return items.map(item =>
        item.id === action.item.id ? action.item : item,
      );
    }
    case 'delete': {
      return items.filter(item => item.id !== action.id);
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
};

export const ItemsContextProvider = ({children}) => {
  const [itemsArray, dispatch] = useReducer(itemsReducer, initialItems);

  return (
    <ItemsContext.Provider
      value={{
        items: itemsArray,
        dispatch: dispatch,
        getItemById: id => itemsArray.find(item => item.id === id),
      }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemsContext);
