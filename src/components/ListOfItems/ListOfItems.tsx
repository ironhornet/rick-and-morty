import { FC } from 'react';
import { Item } from '../Item/Item';
import { PaginationMui } from '../PaginationMui/PaginationMui';
import { ListWrapper } from './listOfItems.style';
import { FabMenu } from '../FabMenu/FabMenu';
import { IListOfItemsProps } from './listoOfItems.interface';

export const ListOfItems: FC<IListOfItemsProps> = ({
  data,
  pageNumber,
  updatePageNumber,
  error,
  amountPages,
}) => {
  const hasError = error.some((value) => typeof value === 'string');

  if (hasError || !data.results) {
    return (
      <ListWrapper>
        <h2 style={{margin: '0 auto'}}>Sorry there is no characters matched with your filters</h2>;
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      {data.results?.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <PaginationMui
        currentPage={pageNumber}
        count={amountPages}
        onSetPageNumberHandler={updatePageNumber}
      />
      <FabMenu right={10} bottom={10} />
    </ListWrapper>
  );
};
