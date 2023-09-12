import { IHistoryListProps } from './historyList.interface';
import { ListWrapper } from './historyList.styles';

export const HistoryList = (props: IHistoryListProps) => {
  const { data } = props;

  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const prepareSection = (sectionKey: string, sectionValue: Record<string, string>) => {
    console.log(sectionValue);
    const sectionName = capitalizeFirstLetter(sectionKey);
    const entries = Object.entries(sectionValue).map(([key, value]) => ({
      keyName: capitalizeFirstLetter(key),
      value: value || 'N/A',
    }));

    return { sectionName, entries };
  };

  const preparedData = Object.entries(data).map(([sectionKey, sectionValue]) => prepareSection(sectionKey, sectionValue)).reverse();

  return (
    <ListWrapper>
      <h3>History</h3>

      {preparedData.map((section) => (
        <div className='listInner' key={section.sectionName}>
          <h4>{section.sectionName}</h4>
          {section.entries.map((entry) => (
            <p key={entry.keyName}>
              {`${entry.keyName}: ${entry.value}`}
            </p>
          ))}
        </div>
      ))}
    </ListWrapper>
  );
};
