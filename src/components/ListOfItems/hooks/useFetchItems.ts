import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchItems } from '../../../store/features/CharacterList/characterList.slice';
import { IUseFetchItems } from './useFetchItems.interface';

export const useFetchItems = (): IUseFetchItems => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = Number(searchParams.get('page')) || 1;

  const { data, loading } = useAppSelector((state) => state.characterList);
  const dispatch = useAppDispatch();

  const updatePageNumber = (num: number) => {
    searchParams.set('page', String(num));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(fetchItems(pageNumber));
  }, [pageNumber]);

  return { 
    data, 
    loading, 
    pageNumber, 
    updatePageNumber,
  };
};
