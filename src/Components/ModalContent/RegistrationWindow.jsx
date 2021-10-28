import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';


const StyledRegistrationWindow = styled.div`
  background-color: #ffffff;
  border: 1px solid #666666;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  color: #221c1d;
  width: 400px;
  margin: 20px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  .popup-close {
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #666666;
  text-decoration: none;
  border: none;
  transition-duration: 0.3s;
  background-color: #ffffff;
  }

  .popup-close i:hover {
  transform: scale(1.2);
  background-color: rgba(0, 162, 255, 0.3);
  }
`

const RegistrationWindow = () => {
  const setModalContent = useContext(ModalContext);
  
  return (
        <StyledRegistrationWindow>
          <button onClick={() => { setModalContent(false) }} type="button" className={"popup-close"}>
            <i className={"far fa-window-close"}></i>
          </button>

        </StyledRegistrationWindow>     
  )
}  

export default React.memo(RegistrationWindow);