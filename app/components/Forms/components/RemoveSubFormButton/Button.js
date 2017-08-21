import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  position: absolute;
  top: 7px;
  right: 0px;

  &:hover {
    .icon {
      color: #545454 !important;
    }
  }
`;

export default Button;
