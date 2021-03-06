import React, { useEffect, useContext, memo } from 'react';
import { ModalContext } from 'HOC/GlobalModalProvider';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ChangeGoalModal from './ChangeGoalModal';
import { transferGoal } from 'store/actions/goals';
import done from '../../../assets/images/GoalsScene/done.png';


const StyledGoal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  padding: 10px;
  border: 1px solid #0023c4;
  border-radius: 4px;
  margin-bottom: 10px;
  transition-duration: 0.3s;

  .goal-item_text {
    color: #3A436F;
    margin-right: 50px;
  }

  .title-task {
    color: #221c1d;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  .goal-item_icons {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
  }

  .goal-edit {
    border: none;
    background: #ffffff;
    color: #666666;
    transition-duration: 0.3s;
    cursor: pointer;
    text-decoration: none;
    margin: 0 15px 4px;
  }
  
  .goal-edit i:hover {
    transform: scale(1.2);
    color: #BF7DE2;
  }

  .goal-checkbox {
    min-height: 25px;
    width: 25px;
    background: #ffffff;
    border: 1px solid #0023c4;
    border-radius: 50px;
  }

  .goal-done {
    height: 20px;
    width: 20px;
  }

  .button-delete {
    height: 30px;
    width: 150px;
    background: #bf7de2;
    border-radius: 25px;
    border: 1px solid #0023c4;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
`

const Goal = (props) => {
  const setModalContent = useContext(ModalContext);
  const dispatch = useDispatch();

  if (!props.taskName) {
    return null
  };

    return (
      <StyledGoal>
        <div className="goal-item_text">
          <div className="title-task">
            {`${props.taskName}`}
          </div>
        </div>
        {props.isButtons ?
          <div className="goal-item_icons">
            <button onClick={() => {setModalContent(
              <ChangeGoalModal taskName={props.taskName} index={props.index}/>
            )}} type="button" className={"goal-edit"}>
              <i class="fas fa-pencil-alt"></i>
            </button>
            <button className="button-delete" type="button" onClick={() => {dispatch(transferGoal(props.taskName, props.index))}}>
              ??? Send goals to archive
            </button>
          </div> : 
          <img className="goal-done" src={done} alt={'Done'} />
      }
      </StyledGoal>
    )
}  



export default React.memo(Goal);