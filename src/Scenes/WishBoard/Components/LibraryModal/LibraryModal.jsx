import React, { memo, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { addPictures } from '../../../../api/instance';
import ChoosePicturesModal from '../ChoosePicturesModal';
import { useDispatch, useSelector } from 'react-redux';
import { newWishBoard, createWishBoard } from 'store/actions/whishBoard';
import { wishBoardSelector } from '../../../../store/selectors/wishBoard';
import { tableOfWishes } from '../../../../api/apiBoards';
import FinishedBoard from '../../../MainScene/Components/FinishedBoard';
import { usersSelector } from '../../../../store/selectors/users';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../../constants/paths';

const StyledLibraryModal = styled.div`
  max-height: 90%;
  width: 80%;
  background-color: #fff;
  position: relative;
  overflow: scroll;

  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

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

  .button-save {
    height: 44px;
    width: 150px;
    background: #bf7de2;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin: 10px 0 50px;
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

  .table-library {
    height: 50%;
    width: 70%;
  }

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  td {
    /* padding: 5% 5%; */
    height: 50%;
    width: 30%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #3a436f;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    margin: 10px 5%;
  }

  .img-table {
    width: 100%;
    height: 60%;
    position: relative;
  }
`;

const LibraryModal = (props) => {
  const setModalContent = useContext(ModalContext);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const wishList = useSelector(wishBoardSelector);
  const users = useSelector(usersSelector);
  const userID = users.map(user => user.userID);
  
  useEffect(() => {
    createTable();
    console.log('category', category)
    savePicture();
  }, 'table')

  const createTable = () => {
    
      console.log('wishList', wishList[0])
      
      if (wishList.length === 0) {
        let layout = JSON.parse(localStorage.layoutOfBoard);
        if (layout === 'gorizontal') {
          const color = JSON.parse(localStorage.colorBoard).color;
          const arrCategories = JSON.parse(localStorage.categoriesBoard).values;
          const numberColumns = arrCategories.length / 2;
  
          let table = document.createElement('table'),
            tr,
            td,
            i;
          for (i = 0; i < arrCategories.length; i++) {
            if (i % numberColumns == 0) {
              tr = table.appendChild(document.createElement('tr'));
            }
            td = tr.appendChild(document.createElement('td'));
            let res = arrCategories[i];
            td.innerHTML = res;
            td.classList.add(res);
            td.style.border = `10px solid ${color}`;
            td.style.margin = `10px 0`;
            let button = document.createElement('button');
            td.appendChild(button).style.border = `6px solid ${color}`;
            let img = document.createElement('img');
            td.appendChild(img);
            // td.innerHTML = `<img class="img-table" src="#"/>`;
            button.innerHTML = '<i class="fas fa-plus"></i>';
            button.style.color = `${color}`;
            button.classList.add(res);
          //   console.log('td', td)
          //   const newTableList = [...tablePicture];
          // newTableList.push(td);
          // setTablePicture(newTableList);
          // dispatch(newWishBoard(td, res));
          console.log('wishList', wishList)
          
          }
          document.querySelector('.table-library').appendChild(table);
          dispatch(newWishBoard(table));
          tableOfWishes(table);
        } else {
          const color = JSON.parse(localStorage.colorBoard).color;
          const arrCategories = JSON.parse(localStorage.categoriesBoard).values;
  
          let table = document.createElement('table'),
            tr,
            td,
            i;
          for (i = 0; i < arrCategories.length; i++) {
            if (i % 2 == 0) {
              tr = table.appendChild(document.createElement('tr'));
            }
            td = tr.appendChild(document.createElement('td'));
  
            let res = arrCategories[i];
            td.innerHTML = res;
            td.classList.add(res);
            td.style.border = `10px solid ${color}`;
            td.style.margin = `10px 0`;
            let button = document.createElement('button');
            td.appendChild(button).style.border = `6px solid ${color}`;
            let img = document.createElement('img');
            td.appendChild(img);
            button.innerHTML = '<i class="fas fa-plus"></i>';
            button.style.color = `${color}`;
            button.classList.add(res);
          }
          document.querySelector('.table-library').appendChild(table);
          dispatch(newWishBoard(table));
          tableOfWishes(table);
  
  
          // let tab = document.querySelector('.table-library');
          // tab.appendChild(table);
          // const newTableList = [...tablePicture];
          // newTableList.push(tab);
          // setTablePicture(newTableList);
          // console.log('table', tablePicture)
        }
        let tableButtons = document.querySelector('table')
        let buttons = tableButtons.getElementsByTagName("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
          setCategory(this.className);
          let chooseCategory = this.className;
          addPicturesToTable(`${this.className}`, chooseCategory);
        });
      };
      } 
      else {
        wishList.map((table) => {
          console.log('wishListDone', table.table)
          document.querySelector('.table-library').appendChild(table.table);
       })
      }

  };

  const addPicturesToTable = (searchPicture, category) => {
    addPictures(searchPicture)
    .then((response) => {
      console.log('response', response.data.hits)
      let imgAll = response.data.hits.map(item => `<img src="${item.largeImageURL}" alt>`)
      setModalContent(<ChoosePicturesModal addPicturesToTable={addPicturesToTable} createTable={createTable} category={category}/>), console.log('category!', category)
      document.querySelector('.result').insertAdjacentHTML('beforeend', imgAll.join(''))
    })
  }

  const savePicture = () => {
    let table = document.querySelector("table");
    if (table != null) {
      let cell = table.querySelectorAll("td");
    let tdForImg = Array.from(cell).find(item => item.className == props.category);
    if (tdForImg != undefined) {
      let img = tdForImg.querySelector('img');
      img.classList.add('img-table');
      img.src = `${props.img}`;
    dispatch(newWishBoard(table));
    tableOfWishes(table);
    console.log("tdWithPicture",table)
  }
    }
    
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
<div className={'wrapper'}>
   <h3>My Wish board</h3>

      <h5>Choose pictures for your board</h5>

      <div className={'table-library'}>
      
      </div>
      <Link to={PATHS.Account(userID)} className={'create-link'}>
        <button onClick={() => {
          setModalContent(false)}} 
          className={'button-save'} type="button">Save</button>
      </Link>
      
</div>
     
    </StyledLibraryModal>
  );
};

export default memo(LibraryModal);
