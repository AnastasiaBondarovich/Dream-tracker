import { useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledFormikInput = styled.div`
  .input_error {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #aa0000;
    margin: 10px 0 20px;
    text-align: center;
  }
`;

const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <StyledFormikInput>
      <input {...field} placeholder={props.placeholder} size={props.size} />
      {meta.touched && meta.error && (
        <div className={'input_error'}>{meta.error}</div>
      )}
    </StyledFormikInput>
  );
};

export default FormikInput;
