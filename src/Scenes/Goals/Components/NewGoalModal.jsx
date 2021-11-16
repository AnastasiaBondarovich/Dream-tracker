import React, { useEffect, memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';

const StyledNewGoalModal = styled.div`
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

#popup-description {
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  border-radius: 4px;
}

.buttons-popup {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
}

#save-button-popup {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  text-align: center;
  padding: 5px 0 5px;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  width: 100px;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #221c1d;
  transition-duration: 0.3s;
}

#save-button-popup:hover {
  transform: scale(1.2);
  background-color: rgb(0, 162, 255, 0.3);
}

#delete-button-popup {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  text-align: center;
  padding: 5px 0 5px;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(49, 75, 105, 0.3),
    0 10px 10px rgba(49, 75, 105, 0.3);
  width: 100px;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #221c1d;
  transition-duration: 0.3s;
}

#delete-button-popup:hover {
  transform: scale(1.2);
  background-color: rgb(0, 162, 255, 0.3);
}

`

const NewGoalModal = (props) => {
  const setModalContent = useContext(ModalContext);
  const [newTaskName, setNewTaskName] = useState('');

    return (
      <React.Fragment>
        <StyledNewGoalModal>
          <button onClick={() => { setModalContent(false) }} type="button" className={"popup-close"}>
            <i className={"far fa-window-close"}></i>
          </button>

          <p className={"popup-name"}>
            New goal:<br />
            <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} id="popup-title" type="text" name="data.title" size="40" />
          </p>

          <div className={"buttons-popup"}>
            <button onClick={() => {props.addGoal(newTaskName); setModalContent(false)}} type="button" id="save-button-popup">Save goal</button>
            {/* <button onClick={() => { setModalContent(false) }} type="button" id="delete-button-popup">Delete</button> */}
          </div>
        </StyledNewGoalModal>
      </React.Fragment>        
    )
}  

export default React.memo(NewGoalModal);