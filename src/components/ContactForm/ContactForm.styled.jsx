import styled from 'styled-components';

const Form = styled.form`
  display: flex;

  label {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
`;

export default Form;
