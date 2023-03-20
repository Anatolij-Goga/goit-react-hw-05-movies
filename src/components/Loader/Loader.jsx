import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <InfinitySpin width="80" color="#F0F8FF" />
    Load More
  </LoaderContainer>
);
