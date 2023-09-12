import { Item } from '../Item/Item';
import { PaginationMui } from '../PaginationMui/PaginationMui';
import { ListWrapper } from './listOfItems.style';
import { Loader } from '../Loader/Loader';
import { useFetchItems } from './hooks/useFetchItems';
import { FabMenu } from '../FabMenu/FabMenu';

export const ListOfItems = () => {
  const { 
    data, 
    loading, 
    pageNumber, 
    updatePageNumber,
  } = useFetchItems();

  if (!data.results) return null;

  if (loading) return <Loader />;

  return (
    <ListWrapper>
      {data.results.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <PaginationMui 
        currentPage={pageNumber}
        count={data.info?.pages || 1}
        onSetPageNumberHandler={updatePageNumber}
      />
      <FabMenu right={10} bottom={10} />
    </ListWrapper>
  );
};
