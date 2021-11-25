import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import { chooseCategory } from '../../../api/apiBoards';
import { Field, Form, Formik, useField } from 'formik';

const StyledChooseCategoryModal = styled.div`
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
    margin-bottom: 5px;
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

  .buttons-categories {
    display: block;
    max-width: 90%;
    margin-bottom: 20px;
  }

  .buttons-categories_work,
  .buttons-categories_family,
  .buttons-categories_lifestyle,
  .buttons-categories_travel,
  .buttons-categories_home {
    display: block;
    margin-bottom: 30px;
  }

  input {
    appearance: none;

    border-radius: 50%;
    width: 20px;
    height: 20px;

    border: 2px solid #bf7de24d;
    transition: 0.2s all linear;
    outline: none;
    margin-right: 5px;

    position: relative;
    top: 4px;
  }

  input:checked {
    border: 6px solid #bf7de2;
  }

  label {
    border: 1px solid #bf7de2;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #3a436f;
    padding: 5px 20px;
    margin-right: 35px;
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

  .title-categories {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #3a436f;
    margin-bottom: 5px;
  }
`;

const ChooseCategoryModal = () => {
  const setModalContent = useContext(ModalContext);

  return (
    <StyledChooseCategoryModal>
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

      <div className={'title-categories'}>
         <h5>Choose сategories of wishes for your board</h5>

      <span>*You must select an even number of categories</span>
      </div>

      <div className={'buttons-categories'}>
        <Formik
          initialValues={[]}
          onSubmit={(values) => {
            console.log(values);
            chooseCategory(values.checked).then(({ data }) => {
              console.log('addCategory', data);
            }); setModalContent(false);
          }}
          validate={(formObj) => {
            const errorObj = {};
            console.log('formObj', formObj)
            if (formObj.checked.length % 2) return {checked: [], errorObj: 'Please mark even amount of categories'}            
          }}
        >
          <Form>
            <div role="group" aria-labelledby="checkbox-group">
              <div className={'buttons-categories_work'}>
                <label>
                  <Field type="checkbox" name="checked" value="Health" />
                  Health
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Work" />
                  Work & Career
                </label>
              </div>
              <div className={'buttons-categories_family'}>
                <label>
                  <Field type="checkbox" name="checked" value="Family" />
                  Family
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Love" />
                  Love
                </label>
              </div>
              <div className={'buttons-categories_lifestyle'}>
                <label>
                  <Field type="checkbox" name="checked" value="Sport" />
                  Sport
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Lifestyle" />
                  Lifestyle
                </label>
              </div>
              <div className={'buttons-categories_travel'}>
                <label>
                  <Field type="checkbox" name="checked" value="Travel" />
                  Travel
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Inspiration" />
                  Inspiration
                </label>
              </div>
              <div className={'buttons-categories_home'}>
                <label>
                  <Field type="checkbox" name="checked" value="Home" />
                  Home
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Fashion" />
                  Fashion
                </label>
              </div>
            </div>

            <button className={'button-save'} type="submit">
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </StyledChooseCategoryModal>
  );
};

export default ChooseCategoryModal;
