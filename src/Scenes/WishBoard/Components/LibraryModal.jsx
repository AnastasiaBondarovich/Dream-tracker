import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';

const StyledLibraryModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 500px;
  width: 80%;
  background-color: #fff;
  position: relative;

  h3 {
    margin: 50px auto 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0023c4;
    margin-bottom: 40px;
  }

  h5 {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #3a436f;
    margin-bottom: 40px;
  }

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
    color: #bf7de2;
  }

  table {
    width: 800px;
    height: 300px;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  td { 
    padding: 5px; 
    /* border: 5px solid ${color};  */
  }

  button {
    width: 100px;
    height: 100px;
  }
`;

const LibraryModal = () => {
  const setModalContent = useContext(ModalContext);
  
  const createTableGorizontal = () => {
    useEffect (() => {
      const color = JSON.parse(localStorage.colorBoard).color;
      const arrCategories = JSON.parse(localStorage.categoriesBoard).values;
      const numberColumns = arrCategories.length / 2;

      let table = document.createElement('table'), tr, td, i;
      for (i = 0; i < arrCategories.length; i++) {
        if (i % numberColumns == 0) {
          tr = table.appendChild(document.createElement('tr'));
        }
        td = tr.appendChild(document.createElement('td'));
        let res = arrCategories[i];
        td.innerHTML = res;
      }
      document.querySelector('.table-library').appendChild(table);
      table.style.border = `5px solid ${color}`;
      tr.style.border = `5px solid ${color}`;
    })
      
  };

  const createTableVertical = () => {
  
  }

  return (
    <StyledLibraryModal>
      <button
        onClick={() => {
          setModalContent(false);
        }}
        type="button"
        className={'popup-close'}
      >
        <i className={'far fa-window-close'}></i>
      </button>

      <h3>My Wish board</h3>

      <h5>Choose pictures for your board</h5>
      
      <div className={'table-library'}>
        {localStorage.layoutOfBoard = 'gorizontal' ?
            createTableGorizontal() :
            createTableVertical()
        }
      </div>
      
    </StyledLibraryModal>
  );
};

export default LibraryModal;
