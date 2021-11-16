import React, { useEffect, memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ModalContext } from 'HOC/GlobalModalProvider';

const StyledChangeGoalModal = styled.div`
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
  color: #BF7DE2;
}

#popup-title {
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 4px;
}

.popup-name {
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 16px;
}

.buttons-popup {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
}
`

const ChangeGoalModal = (props) => {
  const dispatch = useDispatch();
  const setModalContent = useContext(ModalContext);
  const [changeTaskName, setChangeTaskName] = useState(props.taskName);
    
  return (
      <React.Fragment>
        <StyledChangeGoalModal>
          <button onClick={() => { setModalContent(false) }} type="button" className={"popup-close"}>
            <i className={"far fa-window-close"}></i>
          </button>

          <p className={"popup-name"}>
            Goal:<br />
            <input value={changeTaskName} onChange={(event) => {setChangeTaskName(event.target.value)}} id="popup-title" type="text" name="data.title" size="40" />
          </p>

          {/* <div className={"buttons-popup"}>
            <button onClick={() => {dispatch(changeCard(changeTaskName, changeTaskDescription, props.index)); console.log ('change modal', changeTaskName, changeTaskDescription, props.index); setModalContent(false)}} type="button" id="save-button-popup">Save task</button>
            <button onClick={() => {dispatch(removeCard(props.index)); setModalContent(false)}} type="button" id="delete-button-popup">Delete task</button>
          </div> */}
        </StyledChangeGoalModal>
      </React.Fragment>        
    )
}  

export default React.memo(ChangeGoalModal);