import { HiArrowCircleLeft } from 'react-icons/hi';
import { GoBackBox, GoBackLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <GoBackBox>
      <GoBackLink to={to}>
        <HiArrowCircleLeft size={15} />
        Go back
      </GoBackLink>
    </GoBackBox>
  );
};

export default BackLink;
