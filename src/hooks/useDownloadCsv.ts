import { ICharacterDto } from '../types/character.interface';

type FlattenedObject = {
  [key: string]: any;
};

export const useDownloadCsv = () => {
  const isObjectButNotArray = (value: any): boolean => {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
  };

  const getPropName = (parent: string, key: string): string => {
    return parent ? `${parent}.${key}` : key;
  };

  const handleValue = (
    value: any,
    propName: string,
    acc: FlattenedObject
  ): void => {
    if (Array.isArray(value)) {
      acc[propName] = value.join(', ');
    } else {
      acc[propName] = value || 'N/A';
    }
  };

  const flattenObject = (obj: ICharacterDto, parent: string = ''): FlattenedObject => {
    return Object.entries(obj).reduce(
      (acc: FlattenedObject, [key, value]: [string, any]) => {
        const propName = getPropName(parent, key);

        if (isObjectButNotArray(value)) {
          Object.assign(acc, flattenObject(value as ICharacterDto, propName));
        } else {
          handleValue(value, propName, acc);
        }

        return acc;
      },
      {}
    );
  };

  const validateInputData = (dataArray: ICharacterDto[] | any[]): void => {
    if (
      !Array.isArray(dataArray) ||
      dataArray.some((row) => typeof row !== 'object')
    ) {
      throw new Error('The input must be an array of objects.');
    }
  };

  const createCsvRow = (row: FlattenedObject, headers: string[]): string => {
    return headers
      .map((fieldName) => {
        const value = row[fieldName];

        return JSON.stringify(value === '' ? 'N/A' : value);
      })
      .join(',');
  };

  const convertToCsv = (dataArray: ICharacterDto[]): string => {
    validateInputData(dataArray);

    const flattenedData = dataArray.map((data) => flattenObject(data));
    const headers = Object.keys(flattenedData[0]);
    const csvData = flattenedData.map((row) => createCsvRow(row, headers));

    return [headers.join(','), ...csvData].join('\n');
  };

  const saveFileTo = (filename: string, data: string): void => {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const downloadCsv = (data: ICharacterDto[], filename: string = 'data.csv'): void => {
    const csvContent = convertToCsv(data);
    saveFileTo(filename, csvContent);
  };

  return { downloadCsv };
};
