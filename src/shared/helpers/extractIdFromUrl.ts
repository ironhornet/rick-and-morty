export const extractIdFromUrl = (url: string): number => {
  const parts = url.replace(/\/$/, '').split('/');
  
  return parseInt(parts[parts.length - 1], 10);
};
