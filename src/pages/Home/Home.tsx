/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ListOfItems } from '../../components/ListOfItems/ListOfItems';
import { Loader } from '../../components/Loader/Loader';
import {
  ICharacter,
  IEpisodes,
  ILocation,
} from '../../components/Filter/filter.interface';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  fetchFilteredCharacters,
  fetchFilteredEpisodes,
  fetchItems,
  fetchFilteredLocations,
  fetchMultipleCharacters,
} from '../../store/features/CharacterList/characterListThunks';
import { isNonEmptyStrInArray } from '../../shared/helpers/isNonEmptyStrInArray';
import {
  resetState,
  updateMatchedIds,
  updatePageNumber,
} from '../../store/features/CharacterList/characterList.slice';
import { initialValues } from './initialValues';
import {
  areAllFiltersFetched,
  arrayToChunks,
  getActiveFilters,
  getMatchedIds,
} from './home.utils';

export const Home = () => {
  const [characterFilterParams, setCharacterFilterParams] =
    useState<ICharacter | null>(null);
  const [filledFilters, setFilledFilters] = useState<ICharacter | {}>({});

  // TODO Зробити щоб фетчились всі айтеми без фільтрів

  const dispatch = useAppDispatch();

  const {
    episodeCharacterIds,
    locationCharacterIds,
    characterIds,
    matchedIds,
    data,
    loading,
    characterError,
    episodeError,
    locationError,
    fetchingStatus,
    pageNumWithFilters,
    characterLoading,
    episodeLoading,
    locationLoading,
  } = useAppSelector((state) => state.characterList);

  const nextAndPrevPageToggle = (pageNum: number) => {
    if (matchedIds.length) {
      dispatch(fetchMultipleCharacters(matchedIds[pageNum - 1]));
    }

    if (!matchedIds.length) {
      let params = {};

      if (characterFilterParams) params = characterFilterParams;

      dispatch(fetchItems({ page: pageNum, ...params }));
    }
  };

  const updatePageNumberHandler = (num: number) => {
    dispatch(updatePageNumber(num));
    nextAndPrevPageToggle(num);
  };

  const updateFilteredIds = (
    episodeIds: number[],
    locationIds: number[],
    charIds: number[]
  ) => {
    const matchedIds = getMatchedIds(episodeIds, locationIds, charIds);

    if (matchedIds.length > 0) {
      dispatch(updateMatchedIds(arrayToChunks(matchedIds, 20)));
    }
  };

  const getItemsBasedOnFilters = async (
    charactersFilled: boolean,
    locationsFilled: boolean,
    episodesFilled: boolean,
    character: ICharacter,
    location: ILocation,
    episode: IEpisodes,
  ) => {
    if (!locationsFilled && !episodesFilled) {
      await dispatch(fetchItems(character));
      setCharacterFilterParams(character);

      return;
    }

    if (charactersFilled) await dispatch(fetchFilteredCharacters(character));
    if (episodesFilled) await dispatch(fetchFilteredEpisodes(episode));
    if (locationsFilled) await dispatch(fetchFilteredLocations(location));
  };

  useEffect(() => {
    if (!pageNumWithFilters) dispatch(fetchItems({}));
  }, []);

  useEffect(() => {
    if (matchedIds.length) {
      dispatch(fetchMultipleCharacters(matchedIds[0]));
    }
  }, [matchedIds]);

  useEffect(() => {
    if (Object.keys(filledFilters).length === 0) return;

    const activeFilters = getActiveFilters(filledFilters);

    if (areAllFiltersFetched(activeFilters, fetchingStatus)) {
      updateFilteredIds(
        episodeCharacterIds,
        locationCharacterIds,
        characterIds
      );
    }
  }, [fetchingStatus]);

  const onFiltersSubmitHandler = async (
    location: ILocation,
    episode: IEpisodes,
    character: ICharacter
  ) => {
    const charactersFilled = isNonEmptyStrInArray(Object.values(character));
    const locationsFilled = isNonEmptyStrInArray(Object.values(location));
    const episodesFilled = isNonEmptyStrInArray(Object.values(episode));

    dispatch(resetState());

    setFilledFilters({
      character: charactersFilled,
      location: locationsFilled,
      episode: episodesFilled,
    });

    await getItemsBasedOnFilters(
      charactersFilled, 
      locationsFilled, 
      episodesFilled, 
      character, 
      location, 
      episode,
    );
  };

  const onFiltersReset = () => {
    setCharacterFilterParams(null);
  };
  const loadingState = {
    characterLoading,
    episodeLoading,
    locationLoading,
    loading,
  };

  const isLoading = Object.values(loadingState).some((value) => value === true);

  return (
    <div>
      <Filter
        initialValues={initialValues}
        onSubmitHandler={onFiltersSubmitHandler}
        onReset={onFiltersReset}
      />

      {isLoading && <Loader />}
      {!isLoading && (
        <ListOfItems
          data={data}
          error={[characterError, episodeError, locationError]}
          pageNumber={pageNumWithFilters || 1}
          amountPages={data.info?.pages || matchedIds.length}
          updatePageNumber={updatePageNumberHandler}
        />
      )}
    </div>
  );
};
