import { useEffect, useState } from 'react';

import { CardList } from '../types/state';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/localStorage';

export const useCardList = () => {
  const [cardList, setCardList] = useState<CardList>(
    getLocalStorageItem('cardList')
  );

  useEffect(() => {
    if (cardList) {
      setLocalStorageItem('cardList', cardList);
    }
  }, [cardList]);

  return { cardList, setCardList };
};
