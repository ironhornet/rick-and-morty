export const getFromLocalStorage = (key: string) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (error) {
    throw new Error('Error retrieving data from local storage');
  }
};
