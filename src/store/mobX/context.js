import {createContext, useContext} from 'react';

export const ItemsMobXContext = createContext(null);

export const useItemsMobXContext = () => useContext(ItemsMobXContext);
