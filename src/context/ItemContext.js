// src/context/ItemContext.js
import React, { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

export const useItems = () => {
  return useContext(ItemContext);
};

export const ItemProvider = ({ children }) => {
  const defaultItems = [
    {
      id: 1,
      name: 'Tree 1',
      image: require('../resources/image/image 1.png')
    },
    {
      id: 2,
      name: 'Tree 1',
      image: require('../resources/image/image 2.png')
    },
    {
      id: 3,
      name: 'Tree 1',
      image: require('../resources/image/image 3.png')
    },
    {
      id: 4,
      name: 'Tree 1',
      image: require('../resources/image/image 4.png')
    },
    {
      id: 5,
      name: 'Plant 1',
      image: require('../resources/image/image 5.png')
    },
    {
      id: 6,
      name: 'Plant 2',
      image: require('../resources/image/image 6.png')
    },
    {
      id: 7,
      name: 'Plant 3',
      image: require('../resources/image/image 7.png')
    },
    {
      id: 8,
      name: 'Plant 4',
      image: require('../resources/image/image 8.png')
    },
    {
      id: 9,
      name: 'Tray',
      image: require('../resources/image/image 9.png')
    },
    {
      id: 10,
      name: 'Soil',
      image: require('../resources/image/image 10.png')
    },
    {
      id: 11,
      name: 'Soil 2',
      image: require('../resources/image/image 11.png')
    },
    {
      id: 12,
      name: 'Spade',
      image: require('../resources/image/image 12.png')
    },
    {
      id: 13,
      name: 'Duck 1',
      image: require('../resources/image/image 13.png')
    },
    {
      id: 14,
      name: 'Duck 2',
      image: require('../resources/image/image 14-1.png')
    },
    {
      id: 14-1,
      name: 'Duck 3',
      image: require('../resources/image/image 14.png')
    },
    {
      id: 15,
      name: 'Duck 4',
      image: require('../resources/image/image 15.png')
    },
    {
      id: 16,
      name: 'Pot 1',
      image: require('../resources/image/image 16.png')
    },
    {
      id: 17,
      name: 'Pot 2',
      image: require('../resources/image/image 17.png')
    },
    {
      id: 18,
      name: 'Pot 3',
      image: require('../resources/image/image 18.png')
    },
    {
      id: 19,
      name: 'Pot 4',
      image: require('../resources/image/image 19.png')
    }
  ];

  const [items, setItems] = useState(defaultItems);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};
