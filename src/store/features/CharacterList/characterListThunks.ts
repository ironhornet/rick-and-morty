/* eslint-disable no-await-in-loop */
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICharacter,
  IEpisodes,
  ILocation,
} from '../../../components/Filter/filter.interface';
import { axiosInstance } from '../../../api/instances/axiosInstance';
import { extractIdFromUrl } from '../../../shared/helpers/extractIdFromUrl';
import {
  ICharacterListState,
  ICharacterQueries,
} from './characterList.interface';
import { ICharacterDto } from '../../../types/character.interface';

export const fetchFilteredCharacters = createAsyncThunk<number[], ICharacter>(
  'characterList/fetchFilteredCharacters',
  async (params) => {
    let ids: number[] = [];
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const response = await axiosInstance.get('character', {
        params: {
          page,
          ...params,
        },
      });

      const currentPageResidentUrls = response.data.results.map(
        (character: ICharacterDto) => character.id
      );
      
      ids = [...ids, ...currentPageResidentUrls];

      hasNextPage = !!response.data.info.next;
      if (hasNextPage) page++;
    }

    const uniqueResidentIds = Array.from(new Set(ids));

    return uniqueResidentIds;
  }
);

export const fetchFilteredLocations = createAsyncThunk<number[], ILocation>(
  'locationList/fetchFilteredLocations',
  async (params) => {
    let allResidentUrls: string[] = [];
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const response = await axiosInstance.get('location', {
        params: {
          page,
          ...params,
        },
      });

      const currentPageResidentUrls = response.data.results.flatMap(
        (result: {residents: string[]}) => result.residents
      );
      allResidentUrls = [...allResidentUrls, ...currentPageResidentUrls];

      hasNextPage = !!response.data.info.next;
      if (hasNextPage) page++;
    }

    const uniqueResidentIds = Array.from(
      new Set(allResidentUrls),
      extractIdFromUrl
    );

    return uniqueResidentIds;
  }
);

export const fetchFilteredEpisodes = createAsyncThunk<number[], IEpisodes>(
  'episodeList/fetchFilteredEpisodes',
  async (params) => {
    const response = await axiosInstance.get(`episode/${params.episodes}`);

    const ids = response.data.characters.map((url:string) => extractIdFromUrl(url));

    return ids;
  }
);

export const fetchItems = createAsyncThunk<
  ICharacterListState['data'],
  ICharacterQueries
>('characterList/fetchItems', async ({ page = 1, ...otherProps }) => {
  const response = await axiosInstance.get(`character?page=${page}`, {
    params: otherProps,
  });

  return response.data;
});

export const fetchMultipleCharacters = createAsyncThunk<
  ICharacterListState['data']['results'],
  number[]
>('characterList/fetchMultipleCharacters', async (ids: number[]) => {
  const response = await axiosInstance.get(`character/${ids}`);

  const isArray = Array.isArray(response.data);

  return isArray ? response.data : [response.data];
});
