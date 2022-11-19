import React from 'react';
import styled from 'styled-components';

const MyStyle = styled.div`
  border: 1px solid blue;
  color: white;
`;

const Phantom = () => {
  const foo = 12;
  return <MyStyle>{foo}</MyStyle>;
};

export default Phantom;
