import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
`;

export const Information = styled.div`
  display: flex;
  gap: 50px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
export const Span = styled.span`
  font-size: 18px;
`;
export const AddInfo = styled.ul`
  list-style-type: disc;
`;
export const Item = styled.li`
  margin-top: 20px;
  padding-left: 15px;
`;
export const InfoLink = styled(Link)`
  padding: 5px;
  font-size: 25px;
  text-decoration: none;
  color: black;
  &:hover {
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
