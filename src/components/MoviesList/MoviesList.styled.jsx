import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  &:hover {
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieList = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: disc;
`;

export const MovieItem = styled.li`
  font-size: 20px;
`;
