import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.h1`
  color: lightgrey;
  font-weight: 400;
  margin: 0;
`;

export const TrendItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FilmLink = styled(Link)`
  color: lightgrey;
  text-decoration: none;
`;
