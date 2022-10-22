import styled from 'styled-components';

export const List = styled.ul`
  margin: 50px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;

  font-family: 'Inconsolata';

  list-style-type: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  padding: 15px;

  text-align: center;

  cursor: pointer;

  .ContactItem__name {
    margin: 0;

    font-weight: 600;
    font-size: 20px;
  }

  .ContactItem__number {
    margin: 0;
    padding: 0;
    font-size: 16px;

    opacity: 0.8;
  }

  .ContactItem__remove {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;

    opacity: 0;

    transition: opacity 250ms ease;
  }

  &::after {
    content: '';
    display: block;

    position: absolute;
    bottom: 0;

    height: 2px;
    width: 100%;
    left: 0;
    right: 0;
    background: #913fd5;

    transform-origin: center;
    transition: transform 250ms ease;
    transform: scale(0.3);
  }

  &:hover {
    &::after {
      transform: scale(1);
    }

    .ContactItem__remove {
      opacity: 1;
    }
  }
`;
