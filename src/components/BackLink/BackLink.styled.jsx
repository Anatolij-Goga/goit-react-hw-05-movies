import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  margine-left: 20px;
  text-decoration: none;
  border: 1px solid #2196f3;
  border-radius: 4px;
  padding: 7px 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: #2196f3;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;

export const GoBackBox = styled.div`
  margin: 25px 0px;
`;
