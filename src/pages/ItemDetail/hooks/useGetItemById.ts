import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../api/instances/axiosInstance';

export const useGetItemById = (id: number, shouldFetch: boolean) => {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(shouldFetch);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!shouldFetch) {
      setLoading(false);
      return;
    }

    const getData = async () => {
      try {
        const response = await axiosInstance.get(`character/${id}`);
        setItemData(response.data);
      } catch (err) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id, shouldFetch]);

  return { itemData, loading, error };
};
