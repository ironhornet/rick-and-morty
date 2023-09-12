import { FabMenu } from '../FabMenu/FabMenu';
import { IItemProps } from './item.interface';
import {
  Avatar,
  InfoDescription,
  InfoStatus,
  InfoSubtitle,
  InfoTitle,
  ItemWrapper,
  TextInfoWrapper,
} from './item.styles';

export const Item = (props: IItemProps) => {
  const {
    name,
    species,
    status,
    location,
    origin,
    image,
    id,
    isDetail = false,
  } = props;

  const statusColors = {
    Alive: '#55CC44',
    Dead: '#D63D2E',
    unknown: '#9E9E9E',
  };

  return (
    <>
    <ItemWrapper to={`/item/${id}`} $isDetail={isDetail}>
      <Avatar src={image} $isDetail={isDetail} />
      <TextInfoWrapper>
        <InfoTitle>{name}</InfoTitle>

        <InfoStatus color={statusColors[status]}>
          {status} - {species}
        </InfoStatus>

        <InfoSubtitle>Last known location:</InfoSubtitle>

        <InfoDescription className='firstSubtitle'>
          {location.name}
        </InfoDescription>

        <InfoSubtitle>First seen in:</InfoSubtitle>

        <InfoDescription>{origin.name}</InfoDescription>

        {isDetail && (
          <>
            <InfoSubtitle className='detailSubtitle'>Other description:</InfoSubtitle>
            <InfoDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              perspiciatis debitis alias harum necessitatibus? Corporis tempora
              tenetur quaerat vel veritatis repellat libero quae explicabo nisi,
              error possimus iste beatae maxime!
            </InfoDescription>
          </>
        )}
      </TextInfoWrapper>

    </ItemWrapper>
      {isDetail && <FabMenu isDetail={isDetail} right={85} bottom={20} />}
    </>
  );
};
