import { useEffect, useState } from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import HistoryIcon from '@mui/icons-material/History';
import { Box } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

import { FabButtonMui } from '../FabButtonMui/FabButtonMui';
import { DrawerMui } from '../DrawerMui/DrawerMui';
import { useDownloadCsv } from '../../hooks/useDownloadCsv';
import { useAppSelector } from '../../hooks/useAppSelector';
import { HistoryList } from '../HistoryList/HistoryList';
import { getFromLocalStorage } from '../../shared/helpers/getFromLocalStorage';
import { IFabMenuProps } from './fabMenu.interface';

export const FabMenu = (props: IFabMenuProps) => {
  const { right, bottom, isDetail } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [historyData, setHistoryData] = useState(null);

  const data = useAppSelector((state) => state.characterList.data.results);
  const { downloadCsv } = useDownloadCsv();

  const handleDownloadCsv = () => {
    if (data) {
      downloadCsv(data, 'characters.csv');
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const dataFromLocalStorage = getFromLocalStorage('filterHistory');
    setHistoryData(dataFromLocalStorage);
  }, [isModalOpen]);

  return (
    <Box position='absolute' right={right} bottom={bottom}>
      <Box>
        {isOpen && (
          <div style={{ position: 'absolute', top: '-60px', right: '6px' }}>
            <FabButtonMui
              icon={<SystemUpdateAltIcon />}
              size='medium'
              onClick={handleDownloadCsv}
              disabled={isDetail}
            />
          </div>
        )}

        {isOpen && (
          <div style={{ position: 'absolute', top: '-120px', right: '6px' }}>
            <FabButtonMui
              icon={<HistoryIcon />}
              size='medium'
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        )}
        <DrawerMui isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {historyData && <HistoryList data={historyData} />}
        </DrawerMui>

        <FabButtonMui
          icon={<MoreVert />}
          size='large'
          onClick={() => setIsOpen(!isOpen)}
        />
      </Box>
    </Box>
  );
};
