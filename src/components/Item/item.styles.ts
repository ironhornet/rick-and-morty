import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemWrapper = styled(Link)<{ $isDetail?: boolean }>`
  background-color: #3d3e44;
  color: #fff;
  display: flex;
  width: ${({ $isDetail }) => ($isDetail ? '100%' : 'calc(50% - 12px)')};
  margin-bottom: ${({ $isDetail }) => ($isDetail ? '0' : '15px')};
  border-radius: 10px;

  ${({ $isDetail }) => $isDetail &&
    `
      pointer-events: none;
      cursor: default;
    `}
`;

export const Avatar = styled.img<{ $isDetail: boolean }>`
  max-width: ${({ $isDetail }) => ($isDetail ? '550px' : '230px')};
  max-height: ${({ $isDetail }) => ($isDetail ? 'unset' : '220px')};
  object-fit: cover;
  width: 100%;
  border-radius: 10px 0 0 10px;
  margin-right: ${({ $isDetail }) => ($isDetail ? '30px' : '15px')};
`;

export const TextInfoWrapper = styled.div`
  padding: 10px 0;
`;

export const InfoTitle = styled.h3`
  font-weight: 800;
  font-size: 27px;
  margin-bottom: 10px;
`;

export const InfoStatus = styled.p<{ color: string }>`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 15px;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${({ color }) => color || '#9E9E9E'};
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
`;

export const InfoSubtitle = styled.p`
  color: #9e9e9e;
  font-size: 15px;
  margin-bottom: 6px;

  &.detailSubtitle {
    margin-top: 15px;
  }
`;

export const InfoDescription = styled.p`
  font-size: 18px;
  font-weight: 400;

  &.firstSubtitle {
    margin-bottom: 15px;
  }
`;
