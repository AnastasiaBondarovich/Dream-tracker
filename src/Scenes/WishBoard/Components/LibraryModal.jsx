import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { addPictures } from '../../../api/instance';
import ChoosePicturesModal from './ChoosePicturesModal';

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
    /* width: 80%; */
    height: 40%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  td {
    padding: 5% 5%;
    height: 50%;
    /* width: 30%; */
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    margin: 0 auto;
  }

  .img-table {
    width: 200px;
    height: 50%;
    position: relative;
  }
`;

const LibraryModal = (props) => {
  const setModalContent = useContext(ModalContext);
  const [category, setCategory] = useState('');
  
  useEffect(() => {
    createTable();
    console.log('category', category)
    savePicture();
  })

  const createTable = () => {
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
          td.style.border = `6px solid ${color}`;
          td.style.margin = `10px 0`;
          let button = document.createElement('button');
          td.appendChild(button).style.border = `6px solid ${color}`;
          button.innerHTML = '<i class="fas fa-plus"></i>';
          button.style.color = `${color}`;
          button.classList.add(res);
        }
        document.querySelector('.table-library').appendChild(table);
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
          td.style.border = `6px solid ${color}`;
          td.style.margin = `10px 0`;
          let button = document.createElement('button');
          td.appendChild(button).style.border = `6px solid ${color}`;
          button.innerHTML = '<i class="fas fa-plus"></i>';
          button.style.color = `${color}`;
          button.classList.add(res);
        }
        document.querySelector('.table-library').appendChild(table);
      }
      let buttons = document.getElementsByTagName("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
          setCategory(this.className);
          let chooseCategory = this.className;
          addPicturesToTable(`${this.className}`, chooseCategory);
        });
      };

      // button.onclick = function(event) {
      //   console.log('event', event.target)
      //   // addPicturesToTable('Health')
      // }
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

  const savePicture = (category) => {
    let cell = document.querySelectorAll("td");
    let tdForImg = Array.from(cell).find(item => item.className == props.category);
    if (tdForImg != undefined) tdForImg.innerHTML = `<img class="img-table" src="${props.img}"/>`;
    console.log("td", tdForImg)
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
        
      </div>
    </StyledLibraryModal>
  );
};

export default LibraryModal;
