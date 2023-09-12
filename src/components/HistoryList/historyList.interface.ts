interface IHistoryData {
  location: {
    [key: string]: string;
  };
  episodes: {
    [key: string]: string;
  };
  character: {
    [key: string]: string;
  };
}

export interface IHistoryListProps {
 data: IHistoryData
}
