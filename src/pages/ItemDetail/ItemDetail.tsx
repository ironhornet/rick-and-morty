import { useParams } from 'react-router-dom';
import { Item } from '../../components/Item/Item';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetItemById } from './hooks/useGetItemById';

export const ItemDetail = () => {
  const { itemId } = useParams<{ id: string }>() as { itemId: string };

  const { results: characters } = useAppSelector(
    (state) => state.characterList.data
  );

  const currentItemInState = characters?.find(
    (character) => character.id === +itemId
  );

  const shouldFetch = !currentItemInState;
  const { itemData, loading } = useGetItemById(+itemId, shouldFetch);

  const currentItem = currentItemInState || itemData;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentItem) {
    return <div>Character not found!</div>;
  }

  return <Item {...currentItem} isDetail={true} />;
};
