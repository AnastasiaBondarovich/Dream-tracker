import React from 'react';
import styled from 'styled-components';

const StyledChooseColor = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 1000px;
  background-color: #fff;
  margin: 50px auto 50px;

  h3 {
    margin: 60px auto 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023C4;
  }
`;

const ChooseColor = () => {
  return (
    <StyledChooseColor>
      <h3>My Wish board</h3>
      <h5>Colors</h5>
    </StyledChooseColor>
  );
};

export default ChooseColor;
