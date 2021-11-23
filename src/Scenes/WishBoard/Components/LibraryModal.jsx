import React, { memo, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { addPictures } from '../../../api/instance';
import ChoosePicturesModal from './ChoosePicturesModal';
import { useDispatch, useSelector } from 'react-redux';
import { newWishBoard, createWishBoard } from 'store/actions/whishBoard';
import { wishBoardSelector } from '../../../store/selectors/wishBoard';

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
  const [tablePicture, setTablePicture] = useState([]);
  const dispatch = useDispatch();
  const wishList = useSelector(wishBoardSelector);
  
  useEffect(() => {
    createTable();
    console.log('category', category)
    savePicture();
  }, [])

  const createTable = () => {
    
      console.log('wishList', wishList[0])
      
      if (wishList.length === 0) 
      // wishList.map((td) => {
            // console.log('wishListTD', td)
      {
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
            td.innerHTML = `<img class="img-table" src=""/>`;
            button.innerHTML = '<i class="fas fa-plus"></i>';
            button.style.color = `${color}`;
            button.classList.add(res);
          }
          document.querySelector('.table-library').appendChild(table);
          
  
  
          // let tab = document.querySelector('.table-library');
          // tab.appendChild(table);
          // const newTableList = [...tablePicture];
          // newTableList.push(tab);
          // setTablePicture(newTableList);
          // console.log('table', tablePicture)
        }
        let buttons = document.getElementsByTagName("button");
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
    // })



      
      // let layout = JSON.parse(localStorage.layoutOfBoard);
      // if (layout === 'gorizontal') {
      //   const color = JSON.parse(localStorage.colorBoard).color;
      //   const arrCategories = JSON.parse(localStorage.categoriesBoard).values;
      //   const numberColumns = arrCategories.length / 2;

      //   let table = document.createElement('table'),
      //     tr,
      //     td,
      //     i;
      //   for (i = 0; i < arrCategories.length; i++) {
      //     if (i % numberColumns == 0) {
      //       tr = table.appendChild(document.createElement('tr'));
      //     }
      //     td = tr.appendChild(document.createElement('td'));
      //     let res = arrCategories[i];
      //     td.innerHTML = res;
      //     td.classList.add(res);
      //     td.style.border = `6px solid ${color}`;
      //     td.style.margin = `10px 0`;
      //     let button = document.createElement('button');
      //     td.appendChild(button).style.border = `6px solid ${color}`;
      //     button.innerHTML = '<i class="fas fa-plus"></i>';
      //     button.style.color = `${color}`;
      //     button.classList.add(res);
      //   //   console.log('td', td)
      //   //   const newTableList = [...tablePicture];
      //   // newTableList.push(td);
      //   // setTablePicture(newTableList);
      //   dispatch(newWishBoard(td, res));
      //   console.log('wishList', wishList)
      //   }
      //   document.querySelector('.table-library').appendChild(table);
      // } else {
      //   const color = JSON.parse(localStorage.colorBoard).color;
      //   const arrCategories = JSON.parse(localStorage.categoriesBoard).values;

      //   let table = document.createElement('table'),
      //     tr,
      //     td,
      //     i;
      //   for (i = 0; i < arrCategories.length; i++) {
      //     if (i % 2 == 0) {
      //       tr = table.appendChild(document.createElement('tr'));
      //     }
      //     td = tr.appendChild(document.createElement('td'));

      //     let res = arrCategories[i];
      //     td.innerHTML = res;
      //     td.classList.add(res);
      //     td.style.border = `6px solid ${color}`;
      //     td.style.margin = `10px 0`;
      //     let button = document.createElement('button');
      //     td.appendChild(button).style.border = `6px solid ${color}`;
      //     button.innerHTML = '<i class="fas fa-plus"></i>';
      //     button.style.color = `${color}`;
      //     button.classList.add(res);
      //   }
      //   document.querySelector('.table-library').appendChild(table);
        


      //   // let tab = document.querySelector('.table-library');
      //   // tab.appendChild(table);
      //   // const newTableList = [...tablePicture];
      //   // newTableList.push(tab);
      //   // setTablePicture(newTableList);
      //   // console.log('table', tablePicture)
      // }
      // let buttons = document.getElementsByTagName("button");
      // for (let i = 0; i < buttons.length; i++) {
      //   buttons[i].addEventListener("click", function() {
      //     setCategory(this.className);
      //     let chooseCategory = this.className;
      //     addPicturesToTable(`${this.className}`, chooseCategory);
      //   });
      // };

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
      console.log("tdWithPicture", cell)
    let tdForImg = Array.from(cell).find(item => item.className == props.category);
    console.log("tdWithPicture1", tdForImg)
    if (tdForImg != undefined) {
      console.log("tdWithPicture21")
      let img = tdForImg.querySelector('img');
      console.log("tdNode", img);
      img.classList.add('img-table');
      img.src = `${props.img}`;
    // if (tdForImg != undefined) {tdForImg.innerHTML = `<img class="img-table" src="${props.img}"/>`;
    dispatch(newWishBoard(table));
    // const newTableList = [...tablePicture];
    //     newTableList.push(tdForImg);
    //     setTablePicture(newTableList);
    //     console.log('table1', tablePicture)
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

      <h3>My Wish board</h3>

      <h5>Choose pictures for your board</h5>

      <div className={'table-library'}>
      {/* wishList.map(td => td.length == 0 ? createTable() : console.log('wishlist', wishList))} */}
      {/* {wishList.map(() => {
        console.log('wishList', wishList)
        if (wishList.length == 0) {
          
            createTable()
          
          
        // } else {
        //   return (
        //     <table>
        //       <td className="category">{td}, {category}</td>
        //     </table>
            
        //   );
}})} */}
      </div>
    </StyledLibraryModal>
  );
};

export default memo(LibraryModal);
