import { ICharacter } from '../../components/Filter/filter.interface';

export const arrayToChunks = (
  array: number[],
  chunkSize: number
): number[][] => {
  const result: number[][] = [];
  // TODO redo this function use binary search
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
};

export const getMatchedIds = (
  episodeCharacterIds: number[],
  locationCharacterIds: number[],
  characterIds: number[]
) => {
  let arrays = [episodeCharacterIds, locationCharacterIds, characterIds];
  arrays = arrays.filter((arr) => arr.length > 0);
  arrays.sort((a, b) => a.length - b.length);
  const shortestArray = arrays[0];
  const otherArrays = arrays.slice(1);

  const matchedIds = shortestArray.filter((num) => {
    const isNumInAllArrays = otherArrays.every((arr) => arr.includes(num));

    return isNumInAllArrays;
  });

  return matchedIds;
};

export const areAllFiltersFetched = (
  activeFilters: string[],
  fetchingStatus: Record<string, string>
) => {
  return activeFilters.every((filter) => {
    const statusForFilter = fetchingStatus[`${filter}Status`];

    return statusForFilter === 'fetched';
  });
};

export const getActiveFilters = (filters: ICharacter | {}): string[] => {
  const entries = Object.entries(filters);
  const activeEntries = entries.filter(([, isActive]) => isActive);
  const activeFilterNames = activeEntries.map(([filterName]) => filterName);

  return activeFilterNames;
};
