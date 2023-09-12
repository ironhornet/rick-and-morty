export const saveToLocalStorage = <T>(key:string, data: T): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};
