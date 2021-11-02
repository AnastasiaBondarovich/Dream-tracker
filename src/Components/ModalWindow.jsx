import React from 'react';
import styled from 'styled-components';

const StyledModalWindow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(58, 67, 111, 0.85);
  min-width: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 10;
`

const ModalWindow = (props) => {
    return (
      <StyledModalWindow>
        {props.children}
      </StyledModalWindow>
    )
}  

export default React.memo(ModalWindow);