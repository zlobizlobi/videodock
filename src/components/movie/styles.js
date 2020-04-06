import styled from 'styled-components';
import { media } from '../../styles';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  margin: 0 0 20px 0;
  border: none;
  border-radius: 5px;

  &:last-child {
    margin: 0;
  }

  ${media.sm(`
      border: 3px solid #000;
      margin: 10px;

      &:last-child{
        margin: 10px;
      }
  `)}
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 50%;
  width: 100%;
  bottom: 0;
  padding: 20px 0 0 20px;
  display: flex;
  justify-content: flex-start;
`;

export const Text = styled.span`
  color: white;
  letter-spacing: 2px;
`;
