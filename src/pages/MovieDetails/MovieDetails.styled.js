import styled from 'styled-components';

export const DetailsSection = styled.div`
  display: flex;
`;

export const Info = styled.div`
  margin-left: 16px;
`;

export const Name = styled.h2`
  color: lightgrey;
  font-weight: 500;
  font-size: 25px;
  margin: 0;
`;

export const Description = styled.p`
  color: lightgrey;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
`;

export const Text = styled.h3`
  color: lightgrey;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: column;
  color: lightgrey;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 12px;
`;

export const GenresItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
