import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BtnGoBack = styled(Link)`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);
  margin-bottom: 15px;
  width: 70px;
  display: flex;
  justify-content: center;

  &:hover {
    color: lightgray;
  }
`;
