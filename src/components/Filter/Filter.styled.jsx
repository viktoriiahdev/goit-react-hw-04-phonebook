import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;

  h3 {
    font-weight: 600;
    font-size: 20px;
  }

  label {
    display: flex;
    align-items: center;

    position: relative;
    cursor: pointer;
  }

  .Filter__icon {
    position: absolute;
    opacity: 0.4;
    transition: opacity 250ms ease;
  }

  .Filter__input {
    padding-left: 20px;

    &:hover,
    &:focus {
      & + .Filter__icon {
        opacity: 1;
      }
    }
  }
`;

export default FilterWrapper;
